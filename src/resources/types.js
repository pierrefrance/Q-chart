import {vertBarHeight, vertBarSetPadding, chartHeight} from './chartistConfig';

export var types = {
  Bar: {
    label: 'Bar',
    chartistType: 'Bar',
    options: [
      {
        name: 'isColumnChart',      // the opposite would produce a bar chart (aka horizontal bar chart)
        type: 'oneOf',
        labels: ['Säulen', 'Balken'],
        defaultValue: true,
        modifyConfig: (config, value, data, size, rect) => {
          config.horizontalBars = !value;
          if (config.horizontalBars) {
            config.reverseData = true;
            config.height = ((vertBarHeight * data.series.length) + vertBarSetPadding) * data.labels.length;
          } else {
            config.reverseData = false;
            config.height = chartHeight;
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
        name: 'isColumnChart',      // the opposite would produce a bar chart (aka horizontal bar chart)
        type: 'oneOf',
        labels: ['Säulen', 'Balken'],
        defaultValue: true,
        modifyConfig: (config, value, data, size, rect) => {
          config.horizontalBars = !value;
          if (config.horizontalBars) {
            config.reverseData = true;
            config.height = (vertBarHeight + vertBarSetPadding) * data.labels.length;
          } else {
            config.reverseData = false;
            config.height = chartHeight;
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
          } else {
            config.reverseData = true;
          }
        }
      }
    ]
  },
  Line: {
    label: 'Line',
    chartistType: 'Line',
    options: []
  },
}
