'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.setLabelsBasedOnIntervalAndAvailableSpace = setLabelsBasedOnIntervalAndAvailableSpace;
exports.setLabelsBasedOnInterval = setLabelsBasedOnInterval;

var _dateConfigPerLabelInterval = require('./dateConfigPerLabelInterval');

function getLabelsToDisplay(typeOptions, data) {
  var labelsToDisplay = [];
  var lastLabel = undefined;
  data.labels.map(function (label, index) {
    var formattedLabel = _dateConfigPerLabelInterval.seriesTypeConfig[typeOptions.labelInterval].format(index, data.labels.length, new Date(label.toString()), true);
    if (formattedLabel !== lastLabel) {
      lastLabel = formattedLabel;
      labelsToDisplay[index] = label;
    }
  });
  return labelsToDisplay;
}

function isLastVisibleLabel(labelsToDisplay, labelIndex) {
  return labelsToDisplay.length - 1 === labelIndex;
}

function setLabelsBasedOnIntervalAndAvailableSpace(config, typeOptions, data, size, rect) {
  var labelsToDisplay = getLabelsToDisplay(typeOptions, data);

  config.axisX = config.axisX || {};

  var labels = data.labels.map(function (label, index) {
    var space = undefined;
    if (labelsToDisplay[index]) {
      space = _dateConfigPerLabelInterval.seriesTypeConfig[typeOptions.labelInterval].getLabelLength(index, isLastVisibleLabel(labelsToDisplay, index), data, config);
    } else {
      space = 0;
    }
    return {
      space: space
    };
  });

  var xAxisWidth = rect.width - ((config.axisX.offset || 30) + 10);

  var enoughSpace = labels.reduce(function (sum, label) {
    return sum + label.space;
  }, 0) < xAxisWidth;

  if (enoughSpace) {
    data.labels.map(function (label, index) {
      if (labelsToDisplay[index]) {
        data.labels[index] = _dateConfigPerLabelInterval.seriesTypeConfig[typeOptions.labelInterval].format(index, isLastVisibleLabel(labelsToDisplay, index), new Date(label.toString()));
      } else {
        data.labels[index] = '';
      }
    });
  } else {
      data.labels.map(function (label, index) {
        if (labelsToDisplay[index]) {
          if (_dateConfigPerLabelInterval.seriesTypeConfig[typeOptions.labelInterval].getForceShow(index, isLastVisibleLabel(labelsToDisplay, index), data, config, size)) {
            data.labels[index] = _dateConfigPerLabelInterval.seriesTypeConfig[typeOptions.labelInterval].format(index, isLastVisibleLabel(labelsToDisplay, index), new Date(label.toString()));
          } else {
            data.labels[index] = ' ';
          }
        } else {
            data.labels[index] = '';
          }
      });
    }
}

function setLabelsBasedOnInterval(config, typeOptions, data, size, rect) {
  var labelsToDisplay = getLabelsToDisplay(typeOptions, data);

  data.labels.map(function (label, index) {
    data.labels[index] = _dateConfigPerLabelInterval.seriesTypeConfig[typeOptions.labelInterval].format(index, isLastVisibleLabel(labelsToDisplay, index), new Date(label.toString()), true);
  });
}