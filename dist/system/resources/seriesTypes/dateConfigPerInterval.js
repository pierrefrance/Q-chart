System.register([], function (_export) {
  'use strict';

  var months, seriesTypeConfig;
  function pad(value, toLength) {
    value = value.toString();
    while (toLength - value.toString().length > 0) {
      value = '0' + value;
    }
    return value;
  }

  return {
    setters: [],
    execute: function () {
      months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
      seriesTypeConfig = {
        year: {
          format: function format(index, isLastIntervalLabel, date) {
            var forceFull = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

            if (index === 0 || isLastIntervalLabel || forceFull) {
              return date.getFullYear();
            } else {
              return date.getFullYear().toString().slice(2);
            }
          },
          getLabelLength: function getLabelLength(index, isLastIntervalLabel, data, config) {
            return index === 0 || isLastIntervalLabel ? 40 : 23;
          },
          getForceShow: function getForceShow(index, isLastIntervalLabel, data, config, size) {
            return index === 0 || isLastIntervalLabel;
          }
        },
        month: {
          format: function format(index, isLastIntervalLabel, date) {
            var forceFull = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

            if (index === 0 || isLastIntervalLabel || forceFull) {
              return months[date.getMonth()] + ' ' + date.getFullYear();
            } else {
              return months[date.getMonth()].slice(0, 1) + ' ' + date.getFullYear();
            }
          },
          getLabelLength: function getLabelLength(index, isLastIntervalLabel, data, config) {
            var date = new Date(data.labels[index]);
            if (index === 0 || isLastIntervalLabel) {
              return 60;
            }
            return 23;
          },
          getForceShow: function getForceShow(index, isLastIntervalLabel, data, config, size) {
            return index === 0 || isLastIntervalLabel;
          }
        },
        day: {
          format: function format(index, isLastIntervalLabel, date) {
            var forceFull = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

            if (index === 0 || isLastIntervalLabel || forceFull) {
              return pad(date.getDate(), 2) + '.' + pad(date.getMonth() + 1, 2) + '.' + date.getFullYear();
            } else {
              return pad(date.getDate(), 2) + '.' + pad(date.getMonth() + 1, 2);
            }
          },
          getLabelLength: function getLabelLength(index, isLastIntervalLabel, data, config) {
            return index === 0 || isLastIntervalLabel ? 100 : 40;
          },
          getForceShow: function getForceShow(index, isLastIntervalLabel, data, config, size) {
            return index === 0 || isLastIntervalLabel;
          }
        },
        hour: {
          format: function format(index, isLastIntervalLabel, date) {
            var forceFull = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

            return pad(date.getHours() + 1, 2) + ':' + pad(date.getMinutes(), 2);
          },
          getLabelLength: function getLabelLength(index, isLastIntervalLabel, data, config) {
            return 40;
          },
          getForceShow: function getForceShow(index, isLastIntervalLabel, data, config, size) {
            return index === 0 || isLastIntervalLabel;
          }
        }
      };

      _export('seriesTypeConfig', seriesTypeConfig);
    }
  };
});