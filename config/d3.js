module.exports = {
  formatLocale: {
    decimal: ",",
    thousands: " ", // this is a viertelgeviert U+2005
    grouping: [3]
    // "currency": ["", "\u00a0CHF"]
  },
  formatLocaleNoGrouping: {
    decimal: ",",
    thousands: " ", // this is a viertelgeviert U+2005
    grouping: false
    // "currency": ["", "\u00a0CHF"]
  },
  timeFormatLocale: {
    dateTime: "%A, der %e. %B %Y, %X",
    date: "%d.%m.%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"],
    days: [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag"
    ],
    shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    months: [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember"
    ],
    shortMonths: [
      "Jan.",
      "Febr.",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "Aug.",
      "Sept.",
      "Okt.",
      "Nov.",
      "Dez."
    ]
  }
};
