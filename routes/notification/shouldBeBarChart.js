const Joi = require("joi");
const Boom = require("boom");

module.exports = {
  method: "POST",
  path: "/notification/shouldBeBarChart",
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
      if (
        chartType === "StackedBar" &&
        data[0].length === request.payload.item.options.limit
      ) {
        return {
          message: {
            title: "notifications.shouldBeBarChart.title",
            body: "notifications.shouldBeBarChart.body"
          }
        };
      }
      return null;
    } catch (err) {
      return null;
    }
  }
};
