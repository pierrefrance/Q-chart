System.register(['../chartist-plugins/chartist-plugin-class-axis.js', '../chartist-plugins/chartist-plugin-protrude-grid.js', '../chartist-plugins/chartist-plugin-grid-on-top.js', '../chartist-plugins/chartist-plugin-class-tickmarks.js'], function (_export) {
  'use strict';

  var ctExtendGridClassNames, ctProtrudeGrid, ctGridOnTop, ctExtendTickmmarksClassNames, vertBarHeight, vertBarSetPadding, chartHeight, chartistConfigs;

  _export('getConfig', getConfig);

  function getConfig(type, size, data) {
    var config = chartistConfigs[type][size];

    if (type === 'Bar' && data.series.length * data.labels.length >= 30) {
      console.log('+++ uh, barchart and more than 30 bars, better switch to mobile layout on desktop +++');
    }

    if (type === 'Bar' && data.series[0].length >= 12) {
      console.log('+++ uh, barchart and more than 12 datapoints in first series. so many bars, what about a nice linechart instead +++');
    }

    if (type === 'Line' && data.series[0].length < 12) {
      console.log('+++ uh, linechart and less than 12 datapoints in first series. might look chunky, what about a nice bar chart instead +++');
    }

    return config;
  }

  return {
    setters: [function (_chartistPluginsChartistPluginClassAxisJs) {
      ctExtendGridClassNames = _chartistPluginsChartistPluginClassAxisJs.ctExtendGridClassNames;
    }, function (_chartistPluginsChartistPluginProtrudeGridJs) {
      ctProtrudeGrid = _chartistPluginsChartistPluginProtrudeGridJs.ctProtrudeGrid;
    }, function (_chartistPluginsChartistPluginGridOnTopJs) {
      ctGridOnTop = _chartistPluginsChartistPluginGridOnTopJs.ctGridOnTop;
    }, function (_chartistPluginsChartistPluginClassTickmarksJs) {
      ctExtendTickmmarksClassNames = _chartistPluginsChartistPluginClassTickmarksJs.ctExtendTickmmarksClassNames;
    }],
    execute: function () {
      vertBarHeight = 10;

      _export('vertBarHeight', vertBarHeight);

      vertBarSetPadding = 22;

      _export('vertBarSetPadding', vertBarSetPadding);

      chartHeight = 200;

      _export('chartHeight', chartHeight);

      chartistConfigs = {

        Bar: {
          small: {
            height: chartHeight,
            seriesBarDistance: 11,
            chartPadding: {
              top: 0,
              right: 1,
              bottom: 0,
              left: 0
            },
            reverseData: false,
            horizontalBars: true,
            axisX: {
              showGrid: true,
              position: 'start'
            },
            axisY: {
              showGrid: false
            },
            plugins: [ctExtendGridClassNames(), ctExtendTickmmarksClassNames(), ctProtrudeGrid(), ctGridOnTop()]
          },
          large: {
            height: chartHeight,
            fullWidth: true,
            seriesBarDistance: 11,
            chartPadding: {
              top: 0,
              right: 1,
              bottom: 0,
              left: 0
            },
            reverseData: false,
            horizontalBars: false,
            axisX: {
              showGrid: false,
              position: 'end'
            },
            axisY: {
              showGrid: true
            },
            plugins: [ctExtendGridClassNames(), ctExtendTickmmarksClassNames(), ctProtrudeGrid(), ctGridOnTop()]
          }
        },

        StackedBar: {
          small: {
            height: chartHeight,
            seriesBarDistance: 11,
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            },
            reverseData: false,
            horizontalBars: true,
            stackBars: true,
            axisX: {
              showGrid: true,
              position: 'start'
            },
            axisY: {
              showGrid: false
            },
            plugins: [ctExtendGridClassNames(), ctExtendTickmmarksClassNames(), ctProtrudeGrid(), ctGridOnTop()]
          },
          large: {
            height: chartHeight,
            fullWidth: true,
            seriesBarDistance: 11,
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            },
            reverseData: false,
            horizontalBars: false,
            stackBars: true,
            axisX: {
              showGrid: false,
              position: 'end'
            },
            axisY: {
              showGrid: true
            },
            plugins: [ctExtendGridClassNames(), ctExtendTickmmarksClassNames(), ctGridOnTop()]
          }
        },

        Line: {
          small: {
            height: chartHeight,

            showPoint: false,
            lineSmooth: false,
            axisX: {
              showGrid: true,
              showLabel: true,

              labelInterpolationFnc: function skipLabels(value, index) {
                return index % 12 === 0 ? value : null;
              }

            },
            axisY: {
              position: 'start',
              scaleMinSpace: 40
            },
            plugins: [ctExtendGridClassNames(), ctExtendTickmmarksClassNames(), ctProtrudeGrid(), ctGridOnTop()]
          },
          large: {
            height: chartHeight,

            showPoint: false,
            lineSmooth: false,
            axisX: {
              showGrid: true,
              showLabel: true,

              labelInterpolationFnc: function skipLabels(value, index) {
                return index % 12 === 0 ? value : null;
              }

            },
            axisY: {
              position: 'start',
              scaleMinSpace: 40
            },
            plugins: [ctExtendGridClassNames(), ctExtendTickmmarksClassNames(), ctProtrudeGrid(), ctGridOnTop()]
          }
        }
      };

      _export('chartistConfigs', chartistConfigs);
    }
  };
});