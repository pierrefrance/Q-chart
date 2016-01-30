define(['exports', 'module', './helpers'], function (exports, module, _helpers) {
  'use strict';

  module.exports = modifyChartistConfigBeforeRender;

  Number.isInteger = Number.isInteger || function (value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
  };

  function modifyChartistConfigBeforeRender(config, type, data, size, rect) {

    if ((type === 'Bar' || type === 'StackedBar') && size === 'large' && config.horizontalBars === false) {

      var noOfBars = undefined;
      if (type === 'Bar') {
        noOfBars = data.labels.length * data.series.length;
      } else {
        noOfBars = data.labels.length;
      }

      var barWidth = 10;
      var seriesBarDistance = 11;

      if (noOfBars <= 4) {
        barWidth = 36;
        seriesBarDistance = 37;
      } else if (noOfBars > 4 && noOfBars <= 8) {
        barWidth = 28;
        seriesBarDistance = 29;
      } else if (noOfBars > 8 && noOfBars <= 16) {
        barWidth = 20;
        seriesBarDistance = 21;
      } else if (noOfBars > 16 && noOfBars <= 24) {
        barWidth = 14;
        seriesBarDistance = 15;
      } else {
        barWidth = 10;
        seriesBarDistance = 11;
      }

      config.barWidth = barWidth;

      config.seriesBarDistance = seriesBarDistance;
    }

    if (!config.horizontalBars) {
      config.chartPadding.top = 12;
    }

    try {
      var flatDatapoints = (0, _helpers.getFlatDatapoints)(data);
      var onlyInteger = true;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = flatDatapoints[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;

          if (!Number.isInteger(parseFloat(value))) {
            onlyInteger = false;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      config.axisY.onlyInteger = onlyInteger;
    } catch (e) {}
  }
});