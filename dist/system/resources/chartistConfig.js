System.register(['../chartist-plugins/chartist-plugin-protrude-grid.js', '../chartist-plugins/chartist-plugin-baseline.js', '../chartist-plugins/chartist-plugin-label-classes.js', '../chartist-plugins/chartist-plugin-label-position.js', '../chartist-plugins/chartist-plugin-fit-bars.js', '../chartist-plugins/chartist-plugin-series-class-order.js', '../chartist-plugins/chartist-plugin-sophie-viz-color-classes.js', './clone'], function (_export) {
  'use strict';

  var ctProtrudeGrid, ctBaseline, ctLabelClasses, ctLabelPosition, ctExtendFitBarsToData, ctSeriesClassOrder, ctSophieVizColorClasses, clone, vertBarHeight, vertBarSetPadding, chartHeight, chartistClassNamesConfigLine, chartistClassNamesConfigBar, chartistConfigs;

  _export('getConfig', getConfig);

  function getConfig(item, size) {
    var config = clone(chartistConfigs[item.type][size]);

    return config;
  }

  return {
    setters: [function (_chartistPluginsChartistPluginProtrudeGridJs) {
      ctProtrudeGrid = _chartistPluginsChartistPluginProtrudeGridJs.ctProtrudeGrid;
    }, function (_chartistPluginsChartistPluginBaselineJs) {
      ctBaseline = _chartistPluginsChartistPluginBaselineJs.ctBaseline;
    }, function (_chartistPluginsChartistPluginLabelClassesJs) {
      ctLabelClasses = _chartistPluginsChartistPluginLabelClassesJs.ctLabelClasses;
    }, function (_chartistPluginsChartistPluginLabelPositionJs) {
      ctLabelPosition = _chartistPluginsChartistPluginLabelPositionJs.ctLabelPosition;
    }, function (_chartistPluginsChartistPluginFitBarsJs) {
      ctExtendFitBarsToData = _chartistPluginsChartistPluginFitBarsJs.ctExtendFitBarsToData;
    }, function (_chartistPluginsChartistPluginSeriesClassOrderJs) {
      ctSeriesClassOrder = _chartistPluginsChartistPluginSeriesClassOrderJs.ctSeriesClassOrder;
    }, function (_chartistPluginsChartistPluginSophieVizColorClassesJs) {
      ctSophieVizColorClasses = _chartistPluginsChartistPluginSophieVizColorClassesJs.ctSophieVizColorClasses;
    }, function (_clone) {
      clone = _clone['default'];
    }],
    execute: function () {
      vertBarHeight = 10;

      _export('vertBarHeight', vertBarHeight);

      vertBarSetPadding = 22;

      _export('vertBarSetPadding', vertBarSetPadding);

      chartHeight = 200;

      _export('chartHeight', chartHeight);

      chartistClassNamesConfigLine = {
        chart: 'ct-chart-line',
        label: 'ct-label s-font-note-s s-font-note-s--light',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        line: 'ct-line',
        point: 'ct-point',
        area: 'ct-area',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      };
      chartistClassNamesConfigBar = {
        chart: 'ct-chart-bar',
        horizontalBars: 'ct-horizontal-bars',
        label: 'ct-label s-font-note-s s-font-note-s-light',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        bar: 'ct-bar',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      };
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
            axisX: {},
            axisY: {},
            plugins: [ctLabelClasses(), ctLabelPosition(), ctProtrudeGrid(), ctBaseline(), ctSophieVizColorClasses(), ctSeriesClassOrder()],
            classNames: chartistClassNamesConfigBar
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
            axisX: {},
            axisY: {},
            plugins: [ctLabelClasses(), ctLabelPosition(), ctProtrudeGrid(), ctBaseline(), ctExtendFitBarsToData(), ctSophieVizColorClasses(), ctSeriesClassOrder()],
            classNames: chartistClassNamesConfigBar
          }
        },

        StackedBar: {
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
            stackBars: true,
            axisX: {},
            axisY: {},
            plugins: [ctLabelClasses(), ctLabelPosition(), ctProtrudeGrid(), ctBaseline(), ctSophieVizColorClasses()],
            classNames: chartistClassNamesConfigBar
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
            stackBars: true,
            axisX: {},
            axisY: {},
            plugins: [ctLabelClasses(), ctLabelPosition(), ctProtrudeGrid(), ctBaseline(), ctExtendFitBarsToData(), ctSophieVizColorClasses()],
            classNames: chartistClassNamesConfigBar
          }
        },

        Line: {
          small: {
            height: chartHeight,
            chartPadding: {
              top: 0,
              right: 1,
              bottom: 0,
              left: 0
            },
            showPoint: false,
            lineSmooth: false,
            fullWidth: true,
            axisX: {
              showGrid: true,
              showLabel: true
            },
            axisY: {
              showGrid: true,
              position: 'start',
              scaleMinSpace: 40
            },
            plugins: [ctLabelClasses(), ctLabelPosition(), ctProtrudeGrid(), ctBaseline(), ctSophieVizColorClasses()],
            classNames: chartistClassNamesConfigLine
          },
          large: {
            height: chartHeight,
            chartPadding: {
              top: 0,
              right: 1,
              bottom: 0,
              left: 0
            },
            showPoint: false,
            lineSmooth: false,
            fullWidth: true,
            axisX: {
              showGrid: true,
              showLabel: true
            },
            axisY: {
              showGrid: true,
              position: 'start',
              scaleMinSpace: 40
            },
            plugins: [ctLabelClasses(), ctLabelPosition(), ctProtrudeGrid(), ctBaseline(), ctSophieVizColorClasses()],
            classNames: chartistClassNamesConfigLine
          }
        }
      };

      _export('chartistConfigs', chartistConfigs);
    }
  };
});