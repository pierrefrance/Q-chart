const Joi = require("@hapi/joi");
const Boom = require("@hapi/boom");
const vega = require("vega");
const clone = require("clone");
const deepmerge = require("deepmerge");
const getMappedSpec = require("../../helpers/itemVegaMapping.js").getMappedSpec;
const dataHelpers = require("../../helpers/data.js");
const getChartTypeForItemAndWidth = require("../../helpers/chartType.js")
  .getChartTypeForItemAndWidth;
const dateSeries = require("../../helpers/dateSeries.js");
const d3config = require("../../config/d3.js");
const colorSchemeHelpers = require("../../helpers/colorSchemes.js");

const vegaConfig = require("../../config/vega-default.json");

vega.timeFormatLocale(d3config.timeFormatLocale);

// thats the default and might get overwritten by a prerender function of a chart type
vega.formatLocale(d3config.formatLocale);

function getSpecConfig(item, baseConfig, toolRuntimeConfig) {
  // add the config to the template vega spec to allow changes in the config through mappings
  let config = deepmerge(vegaConfig, baseConfig || {});

  // add the config passed in toolRuntimeConfig
  if (toolRuntimeConfig.hasOwnProperty("axis")) {
    config.axis = deepmerge(config.axis || {}, toolRuntimeConfig.axis);
  }

  // add the config passed in toolRuntimeConfig
  if (toolRuntimeConfig.hasOwnProperty("text")) {
    config.text = deepmerge(config.text || {}, toolRuntimeConfig.text);
  }

  return config;
}

async function getSpec(id, width, chartType, item, toolRuntimeConfig) {
  const mappingData = {
    item: item,
    toolRuntimeConfig: toolRuntimeConfig,
    width: width
  };
  const chartTypeConfig = require(`../../chartTypes/${chartType}/config.js`);
  if (chartTypeConfig.data.handleDateSeries) {
    // if we have a date series, we change the date values to date objects
    // and set the detected dateFormat to the mappingData to be used within the mapping functions
    if (dateSeries.isDateSeriesData(item.data)) {
      mappingData.dateFormat = dateSeries.getDateFormatForData(
        mappingData.item.data
      );
      mappingData.item.data = dateSeries.getDataWithDateParsed(
        mappingData.item.data
      );
    }
  }

  // if we do not have a dateseries, we transform all null/undefined values in the first column to empty strings to not display null in the chart
  if (!mappingData.dateFormat) {
    mappingData.item.data = dataHelpers.getWithOnlyStringsInFirstColumn(
      mappingData.item.data
    );
  }

  const templateSpec = require(`../../chartTypes/${chartType}/vega-spec.json`);

  templateSpec.config = getSpecConfig(
    mappingData.item,
    templateSpec.config,
    mappingData.toolRuntimeConfig
  );

  // set the size to the spec
  templateSpec.width = width;

  // this will be the compiled spec from template and mapping
  let spec;
  try {
    spec = getMappedSpec(id, chartType, templateSpec, mappingData);
  } catch (err) {
    throw new Boom(err);
  }
  return spec;
}

async function getSvg(id, request, width, item, toolRuntimeConfig = {}) {
  // first and foremost: cast all the floats in strings to actual floats
  item.data = dataHelpers.getDataWithStringsCastedToFloats(item.data);

  // first we need to know if there is a chartType and which one
  const chartType = getChartTypeForItemAndWidth(item, width);

  // apply default toolRuntimeConfig
  if (!toolRuntimeConfig.hasOwnProperty("displayOptions")) {
    toolRuntimeConfig.displayOptions = {};
  }
  if (!toolRuntimeConfig.displayOptions.hasOwnProperty("size")) {
    toolRuntimeConfig.displayOptions.size = "basic";
  }

  let spec;
  if (item.vegaSpec) {
    spec = item.vegaSpec;

    spec.width = width;

    // set the data from the item
    // all data transforms are part of the spec
    spec.data[0].values = clone(item.data);
  } else if (item.options.chartType) {
    try {
      spec = await getSpec(id, width, chartType, item, toolRuntimeConfig);
    } catch (err) {
      console.log(err);
      throw err;
    }
  } else {
    throw new Error("no spec");
  }

  let svg;

  try {
    const dataflow = vega.parse(spec);

    try {
      const prerender = require(`../../chartTypes/${chartType}/prerender.js`);
      prerender(item, toolRuntimeConfig, spec, vega);
    } catch (err) {
      // we probably do not have prerender for this chartType
    }

    const view = new vega.View(dataflow).renderer("none").initialize();
    view.logLevel(vega.Warn);
    svg = await view.toSVG();

    // post processing
    let postprocessings;
    try {
      postprocessings = require(`../../chartTypes/${chartType}/postprocessings.js`);
    } catch (err) {
      // we ignore errors that come from the chartType not having a postprocessing.js file
      // everything else gets rethrown
      if (err.code !== "MODULE_NOT_FOUND") {
        throw err;
      }
    }
    try {
      if (postprocessings) {
        for (let postprocessing of postprocessings) {
          svg = postprocessing.process(svg, spec, item, toolRuntimeConfig, id);
        }
      }
    } catch (err) {
      request.server.log(["error"], err);
    }
  } catch (err) {
    request.server.log(["error"], err);
    throw err;
  }

  return svg;
}

module.exports = {
  method: "POST",
  path: "/rendering-info/web-svg",
  options: {
    validate: {
      options: {
        allowUnknown: true
      },
      query: {
        width: Joi.number().required(),
        noCache: Joi.boolean(),
        toolRuntimeConfig: Joi.object(),
        id: Joi.string().required()
      },
      payload: {
        item: Joi.object(),
        toolRuntimeConfig: Joi.object()
      }
    }
  },
  handler: async function(request, h) {
    let item = request.payload.item;
    const toolRuntimeConfig =
      request.payload.toolRuntimeConfig || request.query.toolRuntimeConfig;

    // tmp: migrate the data to v2.0.0 schema.
    // this can be removed once the migration on the db is run
    const migrationResponse = await request.server.inject({
      url: "/migration",
      method: "POST",
      payload: { item: item }
    });
    if (migrationResponse.statusCode === 200) {
      item = migrationResponse.result.item;
    }

    colorSchemeHelpers.registerColorSchemes(item, toolRuntimeConfig);

    try {
      const webSvg = {
        markup: await getSvg(
          request.query.id,
          request,
          request.query.width,
          item,
          toolRuntimeConfig
        )
      };

      const response = h.response(webSvg);
      if (!request.query.noCache) {
        response.header(
          "cache-control",
          "public, max-age=60, s-maxage=60, stale-while-revalidate=86400, stale-if-error=86400"
        );
      }
      return response;
    } catch (e) {
      throw e;
    }
  }
};
