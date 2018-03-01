function getChartTypeForItemAndWidth(item, width) {
  // any custom vegaSpec overrules the chartType setting
  if (item.vegaSpec !== undefined && item.vegaSpec !== "") {
    return null;
  }
  if (item.options.chartType === "Line") {
    return "line";
  }

  if (
    item.options.chartType === "Bar" ||
    item.options.chartType === "StackedBar"
  ) {
    if (item.options.barOptions.isBarChart === false) {
      if (item.options.barOptions.forceBarsOnSmall) {
        if (width < 500) {
          return "bar";
        } else {
          return "column";
        }
      }
      return "column";
    } else {
      return "bar";
    }
  }
}

module.exports = {
  getChartTypeForItemAndWidth: getChartTypeForItemAndWidth
};
