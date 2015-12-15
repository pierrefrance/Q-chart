import {vertBarHeight, vertBarSetPadding, chartHeight} from './chartistConfig';
import min from './min';

export var types = {
  Bar: {
    label: 'Bar',
    chartistType: 'Bar',
    options: [
      {
        name: 'isColumnChart',      // false would produce a bar chart (aka horizontal bar chart)
        type: 'oneOf',
        labels: ['Säulen', 'Balken'],
        defaultValue: true,
        modifyConfig: (config, value, data, size, rect) => {
          config.horizontalBars = !value;
          if (config.horizontalBars) {
            config.reverseData = true;
            config.height = ((vertBarHeight * data.series.length) + vertBarSetPadding) * data.labels.length;

            config.axisX.showGrid = true;
            config.axisX.position = 'start';
            config.axisY.showGrid = false;

          } else {
            config.reverseData = false;
            config.height = chartHeight;

            config.axisX.showGrid = false;
            config.axisX.position = 'end';
          }
        }
      },
      {
        name: 'forceBarsOnSmall',
        type: 'boolean',
        label: 'Balken für Mobile',
        defaultValue: true,
        modifyConfig: (config, value, data, size, rect) => {
          if (value && size === 'small') {
            config.horizontalBars = true;
            config.reverseData = true;
            config.height = ((vertBarHeight * data.series.length) + vertBarSetPadding) * data.labels.length;

            config.axisX.showGrid = true;
            config.axisX.position = 'start';
            config.axisY.showGrid = false;
          } else {
            config.reverseData = false;
          }
        }
      }
    ]
  },
  StackedBar: {
    label: 'Stacked Bar',
    chartistType: 'Bar',
    options: [
      {
        name: 'isColumnChart',      // false would produce a bar chart (aka horizontal bar chart)
        type: 'oneOf',
        labels: ['Säulen', 'Balken'],
        defaultValue: true,
        modifyConfig: (config, value, data, size, rect) => {
          config.horizontalBars = !value;
          if (config.horizontalBars) {
            config.reverseData = true;
            config.height = (vertBarHeight + vertBarSetPadding) * data.labels.length;

            config.axisX.showGrid = true;
            config.axisX.position = 'start';
            config.axisY.showGrid = false;
          } else {
            config.reverseData = false;
            config.height = chartHeight;

            config.axisX.showGrid = false;
            config.axisX.position = 'end';
          }
        }
      },
      {
        name: 'forceBarsOnSmall',
        type: 'boolean',
        label: 'Balken für Mobile',
        defaultValue: true,
        modifyConfig: (config, value, data, size, rect) => {
          if (value && size === 'small') {
            config.horizontalBars = true;
            config.reverseData = true;
            config.height = (vertBarHeight + vertBarSetPadding) * data.labels.length;
            
            config.axisX.showGrid = true;
            config.axisX.position = 'start';
            config.axisY.showGrid = false;
          } else {
            config.reverseData = false;
          }
        }
      }
    ]
  },
  Line: {
    label: 'Line',
    chartistType: 'Line',
    options: [],
    modifyConfig: (config, data, size, rect) => {
      config.low = 0;
      let minValue = min(data.series.map(serie => min(serie)));

      // if we have a value below 0, this is our low
      if (minValue < 0) {
        config.low = minValue;
        return;
      }

      // check if we have 100 as first value on every serie (indexed data)
      let allFirstHundered = data.series.map(serie => serie[0]).reduce((prev, current) => {return parseInt(current) === 100},false);
      if (allFirstHundered && minValue >= 100) {
        config.low = 100;
      }
      return;
    }
  },
}
