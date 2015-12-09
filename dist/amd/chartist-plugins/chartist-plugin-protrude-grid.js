define(['exports', 'chartist'], function (exports, _chartist) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.ctProtrudeGrid = ctProtrudeGrid;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Chartist = _interopRequireDefault(_chartist);

  var protrude = 4;

  var defaultOptions = {};

  function ctProtrudeGrid(options) {

    options = Object.assign(defaultOptions, options);

    return function ctProtrudeGrid(chart) {
      if (chart instanceof _Chartist['default'].Line || chart instanceof _Chartist['default'].Bar) {

        var theGrid = [];

        chart.on('created', function (data) {

          theGrid = document.getElementsByClassName('ct-grid');

          for (var i = 0; i < theGrid.length; i++) {
            var gridline = theGrid[i];

            if (gridline.getAttribute('class') === 'ct-grid ct-horizontal' || gridline.getAttribute('class') === 'ct-grid ct-horizontal ct-baseline') {

              var tempY1 = gridline.getAttribute('y1') - protrude;
              var tempY2 = gridline.getAttribute('y2') + protrude;

              gridline.setAttribute('y1', tempY1);
              gridline.setAttribute('y2', tempY2);
            } else if (gridline.getAttribute('class') === 'ct-grid ct-vertical' || gridline.getAttribute('class') === 'ct-grid ct-vertical ct-baseline') {

                console.log(gridline);

                var tempX1 = gridline.getAttribute('x1') - protrude;
                var tempX2 = gridline.getAttribute('x2') + protrude;

                gridline.setAttribute('x1', tempX1);
                gridline.setAttribute('x2', tempX2);
              }
          }
        });
        theGrid.length = 0;
      };
    };
  }

  ;
});