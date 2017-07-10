const array2d = require('array2d');
const getFirstColumnSerie = require('./dateSeries.js').getFirstColumnSerie;
const getDateFormatForSerie = require('./dateSeries.js').getDateFormatForSerie;
const getDateFormatForValue = require('./dateSeries.js').getDateFormatForValue;
const isDateSeries = require('./dateSeries.js').isDateSeries;

// returns NaN if it is not a correct number
function filterFloat(value) {
    if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
      .test(value))
      return Number(value);
  return NaN;
}

// this is a hack to make the old code work with the new model
function dataToChartistModel(data) {
  array2d.eachCell(data, (val, x, y) => {
    if (!isNaN(filterFloat(val)) && !isNaN(parseFloat(val)) && getDateFormatForValue(val) === undefined) {
      data[x][y] = parseFloat(data[x][y]);
    }
  })
  data = array2d.transpose(data.slice(1));
  
  data = {
    labels: data[0]
      .map(label => {
        if (label === null) {
          return '';
        }
        return ''+label;
      }),
    series: data
      .slice(1)
      .map(col => {
        return col.map(cell => {
          if (cell === '') {
            return null;
          }
          return cell;
        });
      })
  }

  return data;
}

// this is a hack to make the old code work with the new model
function optionsToLegacyModel(item) {
  item.type = item.options.chartType;

  item.options.isColumnChart = !item.options.barOptions.isBarChart;
  item.options.forceBarsOnSmall = item.options.barOptions.forceBarsOnSmall;
  delete item.options.barOptions;

  // check if we have a date serie
  // and transform the config if so
  if (isDateSeries(getFirstColumnSerie(item.data)) && item.options.dateSeriesOptions) {
    item.dataSeriesType = {
      id: "date",
      options: {
        interval: item.options.dateSeriesOptions.interval
      },
      config: {
        format: getDateFormatForSerie(getFirstColumnSerie(item.data))
      }
    }
    if (item.options.dateSeriesOptions.prognosisStart) {
      item.dataSeriesType.options.prognosisStart = item.options.dateSeriesOptions.prognosisStart;
    }
    delete item.options.dateSeriesOptions;
  }

  item.options.minValue = item.options.lineChartOptions.minValue;
  item.options.maxValue = item.options.lineChartOptions.maxValue;
  delete item.options.lineChartOptions;

  return item;
}

module.exports = {
  dataToChartistModel: dataToChartistModel,
  optionsToLegacyModel: optionsToLegacyModel
}