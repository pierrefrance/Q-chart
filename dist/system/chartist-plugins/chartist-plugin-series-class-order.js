System.register(['chartist', '../resources/vizColors.js'], function (_export) {
  'use strict';

  var Chartist, vizColorClasses, alphabet;

  _export('ctSeriesClassOrder', ctSeriesClassOrder);

  function ctSeriesClassOrder() {

    return function ctSeriesClassOrder(chart) {
      if (chart instanceof Chartist.Line || chart instanceof Chartist.Bar) {

        chart.on('created', function (data) {
          var series = data.svg.querySelectorAll('.ct-horizontal-bars .ct-series');
          if (series && series.svgElements && series.svgElements.length && series.svgElements.length > 0) {
            var _length = series.svgElements.length;
            var i = _length;
            while (i--) {
              series.svgElements[i].removeClass('ct-series-' + alphabet[i]);
              series.svgElements[i].removeClass(vizColorClasses[i]);
              series.svgElements[i].addClass('ct-series-' + alphabet[_length - 1 - i]);
              series.svgElements[i].addClass(vizColorClasses[_length - 1 - i]);
            }
          }
        });
      }
    };
  }

  return {
    setters: [function (_chartist) {
      Chartist = _chartist['default'];
    }, function (_resourcesVizColorsJs) {
      vizColorClasses = _resourcesVizColorsJs.vizColorClasses;
    }],
    execute: function () {
      alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
      ;
    }
  };
});