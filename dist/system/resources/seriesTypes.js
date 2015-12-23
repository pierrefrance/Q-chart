System.register(['./seriesTypes/dateSeriesType', 'chartist'], function (_export) {
  'use strict';

  var setLabelsBasedOnIntervalAndAvailableSpace, setLabelsBasedOnInterval, Chartist, getLabelFontStyle, getDigitLabelFontStyle, seriesTypes;
  return {
    setters: [function (_seriesTypesDateSeriesType) {
      setLabelsBasedOnIntervalAndAvailableSpace = _seriesTypesDateSeriesType.setLabelsBasedOnIntervalAndAvailableSpace;
      setLabelsBasedOnInterval = _seriesTypesDateSeriesType.setLabelsBasedOnInterval;
    }, function (_chartist) {
      Chartist = _chartist['default'];
    }],
    execute: function () {
      getLabelFontStyle = function getLabelFontStyle() {
        if (window.matchMedia && window.matchMedia('(max-width: 413px)').matches) {
          return '11px Arial';
        } else {
          return '13px Arial';
        }
      };

      _export('getLabelFontStyle', getLabelFontStyle);

      getDigitLabelFontStyle = function getDigitLabelFontStyle() {
        if (window.matchMedia && window.matchMedia('(max-width: 413px)').matches) {
          return '10px Lucida Sans Typewriter';
        } else {
          return '12px Lucida Sans Typewriter';
        }
      };

      _export('getDigitLabelFontStyle', getDigitLabelFontStyle);

      seriesTypes = {
        'date': {
          'x': {
            'Line': {
              modifyData: setLabelsBasedOnIntervalAndAvailableSpace
            },
            'Bar': {
              modifyData: function modifyData(config, type, data, size, rect) {
                if (config.horizontalBars) {
                  setLabelsBasedOnInterval(config, type, data, size, rect);
                } else {
                  setLabelsBasedOnIntervalAndAvailableSpace(config, type, data, size, rect, getLabelFontStyle());
                }
              }
            },
            'StackedBar': {
              modifyData: function modifyData(config, type, data, size, rect) {
                if (config.horizontalBars) {
                  setLabelsBasedOnInterval(config, type, data, size, rect);
                } else {
                  setLabelsBasedOnIntervalAndAvailableSpace(config, type, data, size, rect, getLabelFontStyle());
                }
              }
            }
          }

        }
      };

      _export('seriesTypes', seriesTypes);
    }
  };
});