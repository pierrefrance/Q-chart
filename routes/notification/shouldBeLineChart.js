const Joi = require("joi");
const Boom = require("boom");
const array2d = require("array2d");
const dateSeries = require("../../helpers/dateSeries.js");

module.exports = {
  method: "POST",
  path: "/notification/shouldBeLineChart",
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
      const amountOfRows = array2d.height(data);
      if (
        chartType !== "Line" &&
        data[0] &&
        amountOfRows > request.payload.item.options.limit &&
        dateSeries.isDateSeriesData(data)
      ) {
        return {
          message: {
            title: "notifications.shouldBeLineChart.title",
            body: "notifications.shouldBeLineChart.body"
          }
        };
      }
      return null;
    } catch (err) {
      return null;
    }
  }
};
