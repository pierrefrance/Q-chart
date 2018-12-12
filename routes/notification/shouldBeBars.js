const Joi = require("joi");
const Boom = require("boom");
const dateSeries = require("../../helpers/dateSeries.js");

module.exports = {
  method: "POST",
  path: "/notification/shouldBeBars",
  options: {
    validate: {
      options: {
        allowUnknown: true
      },
      payload: {
        data: Joi.array().required(),
        options: Joi.object().required()
      }
    },
    cors: true,
    tags: ["api"]
  },
  handler: function(request, h) {
    try {
      const data = request.payload.item.data[0];
      const chartType = request.payload.item.data[1];
      const isBarChart = request.payload.item.data[2];
      const forceBarsOnSmall = request.payload.item.data[3];

      if (
        data[0] &&
        ["Bar", "StackedBar"].includes(chartType) &&
        !isBarChart &&
        !forceBarsOnSmall &&
        data[0].length > request.payload.item.options.limit &&
        !dateSeries.isDateSeriesData(data)
      ) {
        return {
          message: {
            title: "notifications.shouldBeBars.title",
            body: "notifications.shouldBeBars.body"
          }
        };
      }
      return null;
    } catch (err) {
      return null;
    }
  }
};
