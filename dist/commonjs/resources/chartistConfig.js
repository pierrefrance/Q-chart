'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getConfig;

var _chartistPluginsChartistPluginClassAxisJs = require('../chartist-plugins/chartist-plugin-class-axis.js');

var _chartistPluginsChartistPluginGridOnTopJs = require('../chartist-plugins/chartist-plugin-grid-on-top.js');

var _chartistPluginsChartistPluginClassTickmarksJs = require('../chartist-plugins/chartist-plugin-class-tickmarks.js');

var vertBarHeight = 10;
var vertBarSetPadding = 22;

var chartistConfigs = {

  Bar: {
    small: {
      height: 200,
      seriesBarDistance: 11,
      chartPadding: {
        top: 0,
        right: 0,
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
      plugins: [(0, _chartistPluginsChartistPluginClassAxisJs.ctExtendGridClassNames)(), (0, _chartistPluginsChartistPluginClassTickmarksJs.ctExtendTickmmarksClassNames)(), (0, _chartistPluginsChartistPluginGridOnTopJs.ctGridOnTop)()]
    },
    large: {
      height: 200,
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
      axisX: {
        showGrid: false,
        position: 'end'
      },
      axisY: {
        showGrid: true
      },
      plugins: [(0, _chartistPluginsChartistPluginClassAxisJs.ctExtendGridClassNames)(), (0, _chartistPluginsChartistPluginClassTickmarksJs.ctExtendTickmmarksClassNames)(), (0, _chartistPluginsChartistPluginGridOnTopJs.ctGridOnTop)()]
    }
  },

  StackedBar: {
    small: {
      height: 200,
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
      plugins: [(0, _chartistPluginsChartistPluginClassAxisJs.ctExtendGridClassNames)(), (0, _chartistPluginsChartistPluginClassTickmarksJs.ctExtendTickmmarksClassNames)(), (0, _chartistPluginsChartistPluginGridOnTopJs.ctGridOnTop)()]
    },
    large: {
      height: 200,
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
      plugins: [(0, _chartistPluginsChartistPluginClassAxisJs.ctExtendGridClassNames)(), (0, _chartistPluginsChartistPluginClassTickmarksJs.ctExtendTickmmarksClassNames)(), (0, _chartistPluginsChartistPluginGridOnTopJs.ctGridOnTop)()]
    }
  },

  Line: {
    small: {
      height: 200,

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
      plugins: [(0, _chartistPluginsChartistPluginClassAxisJs.ctExtendGridClassNames)(), (0, _chartistPluginsChartistPluginClassTickmarksJs.ctExtendTickmmarksClassNames)(), (0, _chartistPluginsChartistPluginGridOnTopJs.ctGridOnTop)()]
    },
    large: {
      height: 200,

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
      plugins: [(0, _chartistPluginsChartistPluginClassAxisJs.ctExtendGridClassNames)(), (0, _chartistPluginsChartistPluginClassTickmarksJs.ctExtendTickmmarksClassNames)(), (0, _chartistPluginsChartistPluginGridOnTopJs.ctGridOnTop)()]
    }
  }
};

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

  if (type === 'Bar' && size === 'small') {
    console.log('+++');
    config.height = (vertBarHeight * data.series.length + vertBarSetPadding) * data.labels.length;
  }

  return config;
}

module.exports = exports['default'];