import env from 'env';

var chart1 = {
  _id: '_1',
  title: 'Hummeln fliegen besser als gedacht 💀👊',
  tool: 'chart',
  rendererVersion: env.VERSION,
  sources: [],
  data: {
    x: {
      label: '',
      data: ['2011-05','2011-06','2011-07','2011-08','2011-09','2011-10','2011-11','2011-12','2012-01','2012-02','2012-03','2012-04','2012-05','2012-06','2012-07','2012-08','2012-09','2012-10','2012-11','2012-12','2013-01','2013-02','2013-03','2013-04','2013-05','2013-06','2013-07','2013-08','2013-09','2013-10','2013-11','2013-12','2014-01','2014-02','2014-03','2014-04','2014-05','2014-06','2014-07','2014-08','2014-09','2014-10','2014-11','2014-12','2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09','2015-10'],
      type: {
        id: 'date',
        config: {
          format: 'YYYY-M',
        },
        options: {
          interval: 'month'
        }
      }
    },
    y: {
      label: 'Flugpunkte',
      data: [
        {
          label: 'Hummeln',
          data: [531.10,491.00,475.70,421.45,402.90,438.00,398.50,392.00,411.20,432.00,389.40,425.60,340.50,295.55,320.15,385.05,343.10,343.05,345.50,351.30,-393.45,387.50,356.10,316.95,323.10,272.15,277.50,305.20,336.70,340.00,309.85,312.70,322.50,329.20,308.80,318.50,323.35,325.55,360.05,362.40,343.20,319.90,320.40,298.80,248.90,300.25,285.90,310.25,287.95,255.30,208.00,148.30,91.55,124.00]
        },
        {
          label: 'Fliegen',
          data: [70.53,4.64,63.43,25.47,54.39,52.83,66.03,44.76,25.03,79.4,41.14,71.73,22.79,64.77,29.02,59.86,38.1,44.48,16.07,62.8,77.6,23.1,83.25,95.18,11.97,3.15,92.01,22.22,68.62,90.64,74.12,28.68,38.29,93.71,37.98,30.83,28.4,55.69,17.11,51.24,25.74,26.51,13.01,76.48,37.22,62.92,73.37,37.94,38.52,72.77,59.48,62.62,49.23,82.04]
        },
        {
          label: 'Füchse',
          data: [62.0,171.82,35.47,6.4,54.17,58.27,224.11,250.61,179.09,232.97,165.29,13.98,286.07,245.85,151.35,21.22,15.25,148.31,62.79,14.13,243.81,206.23,130.83,67.09,169.69,280.16,81.63,266.1,206.14,238.81,150.76,261.19,164.19,207.2,259.09,24.13,26.74,294.57,18.48,168.89,196.54,219.23,250.64,126.15,178.81,233.44,87.47,91.86,5.82,137.65,121.37,276.8,293.63,207.01]
        },
        {
          label: 'Dachse',
          data: [374,435,402,32,60,486,349,118,468,393,335,391,351,93,217,454,332,163,14,345,15,214,76,168,267,78,174,392,77,40,67,356,47,193,474,258,379,202,467,147,312,227,59,338,21,206,35,82,261,73,145,282,411,418,482]
        },
        {
          label: 'Katzen',
          data: [423,433,440,489,460,479,491,449,401,485,424,410,447,446,483,403,472,430,448,438,432,405,419,466,451,453,492,435,482,418,425,426,494,406,402,461,452,476,417,437,445,463,414,456,470,490,429,481,469,478,468,455,444,408,471]
        }
      ]
    }
  },
  notes: "Dieses Diagramm zeigt die Anzahl der Haustiere pro Fahrrard im Kanton Zürich über die letzten zehn Jahre. Quellen: Amt für Pilzprüfung; Haustieramt; Deine Mutter – Beteiligte: Peter Lustig; Luise Honig; Franz Brand – <a href='www.nzz.ch'>Daten downloaden</a>",
  chartConfig: {

  },
  type: 'Line'
}

var chart2 = {
  id: '_2',
  title: 'Ein Kampf zwischen Ahnen',
  tool: 'chart',
  rendererVersion: env.VERSION,
  sources: [],
  data: {
    x: {
      label: '',
      data: ['2011-05','2011-06','2011-07','2011-08','2011-09','2011-10','2011-11'],
      type: {
        id: 'date',
        config: {
          format: 'YYYY-M',
        },
        options: {
          interval: 'month'
        }
      }
    },
    y: {
      label: 'gemessen in Spacepunkten',
      data: [
        {
          label: 'Stärke',
          data: [
            100,
            106.0,
            105.4,
            101.8,
            102,
            200,
            178
          ]
        },
        {
          label: 'Intelligenz',
          data: [
            100,
            300,
            104,
            202,
            107,
            108,
            180
          ]
        },
        {
          label: 'Love',
          data: [
            100, 
            102, 
            104, 
            105, 
            102, 
            108, 
            105
          ]
        }
      ]
    }
  },
  notes: "Dieses Diagramm zeigt die Anzahl der Haustiere pro Fahrrard im Kanton Zürich über die letzten zehn Jahre. Quellen: Amt für Pilzprüfung; Haustieramt; Deine Mutter – Beteiligte: Peter Lustig; Luise Honig; Franz Brand",
  chartConfig: {

  },
  type: 'Line'
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var chart3 = {
  id: '_3',
  title: 'Ein Kampf zwischen Ahnen',
  tool: 'chart',
  rendererVersion: env.VERSION,
  sources: [],
  data: {
    x: {
      label: '',
      data: [
          'Apex',
          'BhetaBheta',
          'Budh',
          'Meto',
          'Notu',
          'Ming',
          'Dris'
      ]
    },
    y: {
      label: 'gemessen in Spacepunkten',
      data: [
        {
          label: 'Stärke',
          data: [
            10.3,
            106.0,
            105.4,
            101.8,
            95.9,
            94.1,
            102.0
          ]
        }
      ]
    }
  },
  notes: "Dieses Diagramm zeigt die Anzahl der Haustiere pro Fahrrard im Kanton Zürich über die letzten zehn Jahre. Quellen: Amt für Pilzprüfung; Haustieramt; Deine Mutter – Beteiligte: Peter Lustig; Luise Honig; Franz Brand",
  chartConfig: {

  },
  type: 'Bar'
}

//--------

var chart4 = {
  id: '_4',
  title: 'Ein Kampf zwischen Ahnen',
  tool: 'chart',
  rendererVersion: env.VERSION,
  sources: [],
  data: {
    x: {
      label: '',
      data: [
          'Apex',
          'BhetaBheta',
          'Budh',
          'Meto',
          'Notu',
          'Ming',
          'Dris'
      ]
    },
    y: {
      label: 'gemessen in Spacepunkten',
      data: [
        {
          label: 'Stärke',
          data: [
            10.3,
            106.0,
            105.4,
            101.8,
            95.9,
            94.1,
            102.0
          ]
        },
        {
          label: 'Intelligenz',
          data: [
            49.843099,
            49.931931,
            61.478163,
            58.981617,
            61.223861,
            65.601574,
            67.89832
          ]
        }
      ]
    }
  },
  notes: "Dieses Diagramm zeigt die Anzahl der Haustiere pro Fahrrard im Kanton Zürich über die letzten zehn Jahre. Quellen: Amt für Pilzprüfung; Haustieramt; Deine Mutter – Beteiligte: Peter Lustig; Luise Honig; Franz Brand",
  chartConfig: {

  },
  type: 'Bar'
}

//--------

var chart5 = {
  id: '_5',
  title: 'Ein Kampf zwischen Ahnen',
  tool: 'chart',
  rendererVersion: env.VERSION,
  sources: [],
  data: {
    x: {
      label: '',
      data: [
          'Apex',
          'BhetaBheta',
          'Budh',
          'Meto',
          'Notu',
          'Ming',
          'Dris'
      ]
    },
    y: {
      label: 'gemessen in Spacepunkten',
      data: [
        {
          label: 'Stärke',
          data: [
            10.3,
            106.0,
            105.4,
            101.8,
            95.9,
            94.1,
            102.0
          ]
        },
        {
          label: 'Intelligenz',
          data: [
            49.843099,
            49.931931,
            61.478163,
            58.981617,
            61.223861,
            65.601574,
            67.89832
          ]
        },
        {
          label: 'Love',
          data: [
            56, 
            21, 
            41, 
            22, 
            15, 
            12, 
            34
          ]
        }
      ]
    }
  },
  notes: "Dieses Diagramm zeigt die Anzahl der Haustiere pro Fahrrard im Kanton Zürich über die letzten zehn Jahre. Quellen: Amt für Pilzprüfung; Haustieramt; Deine Mutter – Beteiligte: Peter Lustig; Luise Honig; Franz Brand",
  chartConfig: {

  },
  type: 'Bar'
}

//--------

var chart6 = {
  id: '_6',
  title: 'Ein Kampf zwischen Ahnen',
  tool: 'chart',
  rendererVersion: env.VERSION,
  sources: [],
  data: {
    x: {
      label: '',
      data: [
          'Apex',
          'BhetaBheta',
          'Budh',
          'Meto',
          'Notu',
          'Ming',
          'Dris'
      ]
    },
    y: {
      label: 'gemessen in Spacepunkten',
      data: [
        {
          label: 'Stärke',
          data: [
            10.3,
            106.0,
            105.4,
            101.8,
            95.9,
            94.1,
            102.0
          ]
        },
        {
          label: 'Intelligenz',
          data: [
            49.843099,
            49.931931,
            61.478163,
            58.981617,
            61.223861,
            65.601574,
            67.89832
          ]
        },
        {
          label: 'Love',
          data: [
            56, 
            21, 
            41, 
            22, 
            15, 
            12, 
            34
          ]
        },
        {
          label: 'Wahrheit',
          data: [
            30, 
            20, 
            40, 
            50, 
            60, 
            71, 
            10
          ]
        }
      ]
    }
  },
  notes: "Dieses Diagramm zeigt die Anzahl der Haustiere pro Fahrrard im Kanton Zürich über die letzten zehn Jahre. Quellen: Amt für Pilzprüfung; Haustieramt; Deine Mutter – Beteiligte: Peter Lustig; Luise Honig; Franz Brand",
  chartConfig: {

  },
  type: 'Bar'
}

//--------

var chart7 = {
  id: '_2',
  title: 'Ein Kampf zwischen Ahnen',
  tool: 'chart',
  rendererVersion: env.VERSION,
  sources: [],
  data: {
    x: {
      label: '',
      data: [
          'Apex',
          'BhetaBheta',
          'Budh',
          'Meto',
          'Notu',
          'Ming',
          'Dris'
      ]
    },
    y: {
      label: 'gemessen in Spacepunkten',
      data: [
        {
          label: 'Stärke',
          data: [
            10.3,
            106.0,
            105.4,
            101.8,
            95.9,
            94.1,
            102.0
          ]
        },
        {
          label: 'Intelligenz',
          data: [
            49.843099,
            49.931931,
            61.478163,
            58.981617,
            61.223861,
            65.601574,
            67.89832
          ]
        },
        {
          label: 'Love',
          data: [
            56, 
            21, 
            41, 
            22, 
            15, 
            12, 
            34
          ]
        },
        {
          label: 'Wahrheit',
          data: [
            30, 
            20, 
            40, 
            50, 
            60, 
            71, 
            10
          ]
        },
        {
          label: 'Führerschein',
          data: [
            51, 
            31, 
            22, 
            71, 
            41, 
            34, 
            15
          ]
        }
      ]
    }
  },
  notes: "Dieses Diagramm zeigt die Anzahl der Haustiere pro Fahrrard im Kanton Zürich über die letzten zehn Jahre. Quellen: Amt für Pilzprüfung; Haustieramt; Deine Mutter – Beteiligte: Peter Lustig; Luise Honig; Franz Brand",
  chartConfig: {

  },
  type: 'Bar'
}

//--------

var chart8 = {
  _id: '_8',
  title: 'Hummeln fliegen besser als gedacht',
  tool: 'chart',
  rendererVersion: env.VERSION,
  sources: [],
  data: {
    x: {
      label: '',
      data: ['2011-05','2011-06','2011-07','2011-08','2011-09','2011-10','2011-11','2011-12','2012-01','2012-02','2012-03','2012-04','2012-05','2012-06','2012-07','2012-08','2012-09','2012-10','2012-11','2012-12','2013-01','2013-02','2013-03','2013-04','2013-05','2013-06','2013-07','2013-08','2013-09','2013-10','2013-11','2013-12','2014-01','2014-02','2014-03','2014-04','2014-05','2014-06','2014-07','2014-08','2014-09','2014-10','2014-11','2014-12','2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09','2015-10'],
      type: {
        id: 'date',
        config: {
          format: 'YYYY-M',
        },
        options: {
          interval: 'month'
        }
      }
    },
    y: {
      label: 'Flugpunkte',
      data: [
        {
          label: 'Hummeln',
          data: [531.10,491.00,475.70,421.45,402.90,438.00,398.50,392.00,411.20,432.00,389.40,425.60,340.50,295.55,320.15,385.05,343.10,343.05,345.50,351.30,393.45,387.50,356.10,316.95,323.10,272.15,277.50,305.20,336.70,340.00,309.85,312.70,322.50,329.20,308.80,318.50,323.35,325.55,360.05,362.40,343.20,319.90,320.40,298.80,248.90,300.25,285.90,310.25,287.95,255.30,208.00,148.30,91.55,124.00]
        }
      ]
    }
  },
  notes: "Dieses Diagramm zeigt die Anzahl der Haustiere pro Fahrrard im Kanton Zürich über die letzten zehn Jahre. Quellen: Amt für Pilzprüfung; Haustieramt; Deine Mutter – Beteiligte: Peter Lustig; Luise Honig; Franz Brand",
  chartConfig: {

  },
  type: 'Line'
}

//--------

var chart9 = {
  _id: '_9',
  title: 'Hummeln fliegen besser als gedacht',
  tool: 'chart',
  rendererVersion: env.VERSION,
  sources: [],
  data: {
    x: {
      label: '',
      data: ['2011-05','2011-06','2011-07','2011-08','2011-09','2011-10','2011-11','2011-12','2012-01','2012-02','2012-03','2012-04','2012-05','2012-06','2012-07','2012-08','2012-09','2012-10','2012-11','2012-12','2013-01','2013-02','2013-03','2013-04','2013-05','2013-06','2013-07','2013-08','2013-09','2013-10','2013-11','2013-12','2014-01','2014-02','2014-03','2014-04','2014-05','2014-06','2014-07','2014-08','2014-09','2014-10','2014-11','2014-12','2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09','2015-10'],
      type: {
        id: 'date',
        config: {
          format: 'YYYY-M',
        },
        options: {
          interval: 'month'
        }
      }
    },
    y: {
      label: 'Flugpunkte',
      data: [
        {
          label: 'Hummeln',
          data: [1025531.10,-41091.00,475.70,421.45,402.90,438.00,398.50,392.00,411.20,432.00,389.40,425.60,340.50,295.55,320.15,385.05,343.10,343.05,345.50,351.30,393.45,387.50,356.10,316.95,323.10,272.15,277.50,305.20,336.70,340.00,309.85,312.70,322.50,329.20,308.80,318.50,323.35,325.55,360.05,362.40,343.20,319.90,320.40,298.80,248.90,300.25,285.90,310.25,287.95,255.30,208.00,148.30,91.55,124.00]
        },
        {
          label: 'Fliegen',
          data: [1021070.53,4.64,63.43,25.47,54.39,52.83,66.03,44.76,25.03,79.4,41.14,71.73,22.79,64.77,29.02,59.86,38.1,44.48,16.07,62.8,77.6,23.1,83.25,95.18,11.97,3.15,92.01,22.22,68.62,90.64,74.12,28.68,38.29,93.71,37.98,30.83,28.4,55.69,17.11,51.24,25.74,26.51,13.01,76.48,37.22,62.92,73.37,37.94,38.52,72.77,59.48,62.62,49.23,82.04]
        }
      ]
    }
  },
  notes: "Dieses Diagramm zeigt die Anzahl der Haustiere pro Fahrrard im Kanton Zürich über die letzten zehn Jahre. Quellen: Amt für Pilzprüfung; Haustieramt; Deine Mutter – Beteiligte: Peter Lustig; Luise Honig; Franz Brand",
  chartConfig: {

  },
  type: 'Line'
}

//--------

var chart10 = {
  _id: '_10',
  title: 'Hummeln fliegen besser als gedacht',
  tool: 'chart',
  rendererVersion: env.VERSION,
  sources: [],
  data: {
    x: {
      label: '',
      data: ['2011-05','2011-06','2011-07','2011-08','2011-09','2011-10','2011-11','2011-12','2012-01','2012-02','2012-03','2012-04','2012-05','2012-06','2012-07','2012-08','2012-09','2012-10','2012-11','2012-12','2013-01','2013-02','2013-03','2013-04','2013-05','2013-06','2013-07','2013-08','2013-09','2013-10','2013-11','2013-12','2014-01','2014-02','2014-03','2014-04','2014-05','2014-06','2014-07','2014-08','2014-09','2014-10','2014-11','2014-12','2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09','2015-10'],
      type: {
        id: 'date',
        config: {
          format: 'YYYY-M',
        },
        options: {
          interval: 'month'
        }
      }
    },
    y: {
      label: 'Flugpunkte',
      data: [
        {
          label: 'Hummeln',
          data: [531.10,491.00,475.70,421.45,402.90,438.00,398.50,392.00,411.20,432.00,389.40,425.60,340.50,295.55,320.15,385.05,343.10,343.05,345.50,351.30,393.45,387.50,356.10,316.95,323.10,272.15,277.50,305.20,336.70,340.00,309.85,312.70,322.50,329.20,308.80,318.50,323.35,325.55,360.05,362.40,343.20,319.90,320.40,298.80,248.90,300.25,285.90,310.25,287.95,255.30,208.00,148.30,91.55,124.00]
        },
        {
          label: 'Fliegen',
          data: [70.53,4.64,63.43,25.47,54.39,52.83,66.03,44.76,25.03,79.4,41.14,71.73,22.79,64.77,29.02,59.86,38.1,44.48,16.07,62.8,77.6,23.1,83.25,95.18,11.97,3.15,92.01,22.22,68.62,90.64,74.12,28.68,38.29,93.71,37.98,30.83,28.4,55.69,17.11,51.24,25.74,26.51,13.01,76.48,37.22,62.92,73.37,37.94,38.52,72.77,59.48,62.62,49.23,82.04]
        },
        {
          label: 'Füchse',
          data: [62.0,171.82,35.47,6.4,54.17,58.27,224.11,250.61,179.09,232.97,165.29,13.98,286.07,245.85,151.35,21.22,15.25,148.31,62.79,14.13,243.81,206.23,130.83,67.09,169.69,280.16,81.63,266.1,206.14,238.81,150.76,261.19,164.19,207.2,259.09,24.13,26.74,294.57,18.48,168.89,196.54,219.23,250.64,126.15,178.81,233.44,87.47,91.86,5.82,137.65,121.37,276.8,293.63,207.01]
        }
      ]
    }
  },
  notes: "Dieses Diagramm zeigt die Anzahl der Haustiere pro Fahrrard im Kanton Zürich über die letzten zehn Jahre. Quellen: Amt für Pilzprüfung; Haustieramt; Deine Mutter – Beteiligte: Peter Lustig; Luise Honig; Franz Brand",
  chartConfig: {

  },
  type: 'Line'
}

//--------

var chart11 = {
  _id: '_11',
  title: 'Hummeln fliegen besser als gedacht',
  tool: 'chart',
  rendererVersion: env.VERSION,
  sources: [],
  data: {
    x: {
      label: '',
      data: ['2011-05','2011-06','2011-07','2011-08','2011-09','2011-10','2011-11','2011-12','2012-01','2012-02','2012-03','2012-04','2012-05','2012-06','2012-07','2012-08','2012-09','2012-10','2012-11','2012-12','2013-01','2013-02','2013-03','2013-04','2013-05','2013-06','2013-07','2013-08','2013-09','2013-10','2013-11','2013-12','2014-01','2014-02','2014-03','2014-04','2014-05','2014-06','2014-07','2014-08','2014-09','2014-10','2014-11','2014-12','2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09','2015-10'],
      type: {
        id: 'date',
        config: {
          format: 'YYYY-M',
        },
        options: {
          interval: 'month'
        }
      }
    },
    y: {
      label: 'Flugpunkte',
      data: [
        {
          label: 'Hummeln',
          data: [531.10,491.00,475.70,421.45,402.90,438.00,398.50,392.00,411.20,432.00,389.40,425.60,340.50,295.55,320.15,385.05,343.10,343.05,345.50,351.30,393.45,387.50,356.10,316.95,323.10,272.15,277.50,305.20,336.70,340.00,309.85,312.70,322.50,329.20,308.80,318.50,323.35,325.55,360.05,362.40,343.20,319.90,320.40,298.80,248.90,300.25,285.90,310.25,287.95,255.30,208.00,148.30,91.55,124.00]
        },
        {
          label: 'Fliegen',
          data: [70.53,4.64,63.43,25.47,54.39,52.83,66.03,44.76,25.03,79.4,41.14,71.73,22.79,64.77,29.02,59.86,38.1,44.48,16.07,62.8,77.6,23.1,83.25,95.18,11.97,3.15,92.01,22.22,68.62,90.64,74.12,28.68,38.29,93.71,37.98,30.83,28.4,55.69,17.11,51.24,25.74,26.51,13.01,76.48,37.22,62.92,73.37,37.94,38.52,72.77,59.48,62.62,49.23,82.04]
        },
        {
          label: 'Füchse',
          data: [62.0,171.82,35.47,6.4,54.17,58.27,224.11,250.61,179.09,232.97,165.29,13.98,286.07,245.85,151.35,21.22,15.25,148.31,62.79,14.13,243.81,206.23,130.83,67.09,169.69,280.16,81.63,266.1,206.14,238.81,150.76,261.19,164.19,207.2,259.09,24.13,26.74,294.57,18.48,168.89,196.54,219.23,250.64,126.15,178.81,233.44,87.47,91.86,5.82,137.65,121.37,276.8,293.63,207.01]
        },
        {
          label: 'Dachse',
          data: [374,435,402,32,60,486,349,118,468,393,335,391,351,93,217,454,332,163,14,345,15,214,76,168,267,78,174,392,77,40,67,356,47,193,474,258,379,202,467,147,312,227,59,338,21,206,35,82,261,73,145,282,411,418,482]
        }
      ]
    }
  },
  notes: "Dieses Diagramm zeigt die Anzahl der Haustiere pro Fahrrard im Kanton Zürich über die letzten zehn Jahre. Quellen: Amt für Pilzprüfung; Haustieramt; Deine Mutter – Beteiligte: Peter Lustig; Luise Honig; Franz Brand",
  chartConfig: {

  },
  type: 'Line'
}

//--------

var chart12 = {
  _id: '_12',
  title: 'Hummeln fliegen besser als gedacht',
  tool: 'chart',
  rendererVersion: env.VERSION,
  sources: [],
  data: {
    x: {
      label: '',
      data: ['2011-05','2011-06','2011-07','2011-08','2011-09','2011-10','2011-11','2011-12','2012-01','2012-02','2012-03','2012-04','2012-05','2012-06','2012-07','2012-08','2012-09','2012-10','2012-11','2012-12','2013-01','2013-02','2013-03','2013-04','2013-05','2013-06','2013-07','2013-08','2013-09','2013-10','2013-11','2013-12','2014-01','2014-02','2014-03','2014-04','2014-05','2014-06','2014-07','2014-08','2014-09','2014-10','2014-11','2014-12','2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09','2015-10'],
      type: {
        id: 'date',
        config: {
          format: 'YYYY-M',
        },
        options: {
          interval: 'month'
        }
      }
    },
    y: {
      label: 'Flugpunkte',
      data: [
        {
          label: 'Hummeln',
          data: [531.10,491.00,475.70,421.45,402.90,438.00,398.50,392.00,411.20,432.00,389.40,425.60,340.50,295.55,320.15,385.05,343.10,343.05,345.50,351.30,393.45,387.50,356.10,316.95,323.10,272.15,277.50,305.20,336.70,340.00,309.85,312.70,322.50,329.20,308.80,318.50,323.35,325.55,360.05,362.40,343.20,319.90,320.40,298.80,248.90,300.25,285.90,310.25,287.95,255.30,208.00,148.30,91.55,124.00]
        },
        {
          label: 'Fliegen',
          data: [70.53,4.64,63.43,25.47,54.39,52.83,66.03,44.76,25.03,79.4,41.14,71.73,22.79,64.77,29.02,59.86,38.1,44.48,16.07,62.8,77.6,23.1,83.25,95.18,11.97,3.15,92.01,22.22,68.62,90.64,74.12,28.68,38.29,93.71,37.98,30.83,28.4,55.69,17.11,51.24,25.74,26.51,13.01,76.48,37.22,62.92,73.37,37.94,38.52,72.77,59.48,62.62,49.23,82.04]
        },
        {
          label: 'Füchse',
          data: [62.0,171.82,35.47,6.4,54.17,58.27,224.11,250.61,179.09,232.97,165.29,13.98,286.07,245.85,151.35,21.22,15.25,148.31,62.79,14.13,243.81,206.23,130.83,67.09,169.69,280.16,81.63,266.1,206.14,238.81,150.76,261.19,164.19,207.2,259.09,24.13,26.74,294.57,18.48,168.89,196.54,219.23,250.64,126.15,178.81,233.44,87.47,91.86,5.82,137.65,121.37,276.8,293.63,207.01]
        },
        {
          label: 'Dachse',
          data: [374,435,402,32,60,486,349,118,468,393,335,391,351,93,217,454,332,163,14,345,15,214,76,168,267,78,174,392,77,40,67,356,47,193,474,258,379,202,467,147,312,227,59,338,21,206,35,82,261,73,145,282,411,418,482]
        },
        {
          label: 'Katzen',
          data: [423,433,440,489,460,479,491,449,401,485,424,410,447,446,483,403,472,430,448,438,432,405,419,466,451,453,492,435,482,418,425,426,494,406,402,461,452,476,417,437,445,463,414,456,470,490,429,481,469,478,468,455,444,408,471]
        }
      ]
    }
  },
  notes: "Dieses Diagramm zeigt die Anzahl der Haustiere pro Fahrrard im Kanton Zürich über die letzten zehn Jahre. Quellen: Amt für Pilzprüfung; Haustieramt; Deine Mutter – Beteiligte: Peter Lustig; Luise Honig; Franz Brand",
  chartConfig: {

  },
  type: 'Line'
}

//--------

var chart13 = {
  _id: '_13',
  title: 'Hummeln fliegen besser als gedacht',
  tool: 'chart',
  rendererVersion: env.VERSION,
  sources: [],
  data: {
    x: {
      label: '',
      data: ['2011-05','2011-06','2011-07','2011-08','2011-09','2011-10','2011-11','2011-12','2012-01','2012-02','2012-03','2012-04'],
      type: {
        id: 'date',
        config: {
          format: 'YYYY-M',
        },
        options: {
          interval: 'month'
        }
      }
    },
    y: {
      label: 'Flugpunkte',
      data: [
        {
          label: 'Hummeln',
          data: [531.10,491.00,475.70,421.45,402.90,438.00,398.50,392.00,411.20,432.00,389.40,425.60]
        },
      ]
    }
  },
  notes: "Dieses Diagramm zeigt die Anzahl der Haustiere pro Fahrrard im Kanton Zürich über die letzten zehn Jahre. Quellen: Amt für Pilzprüfung; Haustieramt; Deine Mutter – Beteiligte: Peter Lustig; Luise Honig; Franz Brand",
  chartConfig: {

  },
  "options": {
    "isColumnChart": false,
    "forceBarsOnSmall": true
  },
  type: 'Bar'
}

//--------

var chart14 = {
  _id: '_14',
  title: 'Hummeln fliegen besser als gedacht',
  tool: 'chart',
  rendererVersion: env.VERSION,
  sources: [],
  data: {
    x: {
      label: '',
      data: ['2011-05','2011-06','2011-07','2011-08','2011-09','2011-10','2011-11','2011-12','2012-01','2012-02','2012-03','2012-04'],
      type: {
        id: 'date',
        config: {
          format: 'YYYY-M',
        },
        options: {
          interval: 'month'
        }
      }
    },
    y: {
      label: 'Flugpunkte',
      data: [
        {
          label: 'Hummeln',
          data: [531.10,491.00,475.70,421.45,402.90,438.00,398.50,392.00,411.20,432.00,389.40,425.60]
        },
        {
          label: 'Fliegen',
          data: [70.53,4.64,63.43,25.47,54.39,52.83,66.03,44.76,25.03,79.4,41.14,71.73]
        }
      ]
    }
  },
  notes: "Dieses Diagramm zeigt die Anzahl der Haustiere pro Fahrrard im Kanton Zürich über die letzten zehn Jahre. Quellen: Amt für Pilzprüfung; Haustieramt; Deine Mutter – Beteiligte: Peter Lustig; Luise Honig; Franz Brand",
  chartConfig: {

  },
  type: 'Line'
}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import {display as displayChart} from 'index';
import 'themes/default/dev-styles.css!';

let rendererConfig = {
  rendererBaseUrl: '',
}


displayChart(chart1, document.getElementById('chart1'), rendererConfig);
displayChart(chart2, document.getElementById('chart2'), rendererConfig);

// -- colors bars

displayChart(chart3, document.getElementById('chart3'), rendererConfig);
displayChart(chart4, document.getElementById('chart4'), rendererConfig);
displayChart(chart5, document.getElementById('chart5'), rendererConfig);
displayChart(chart6, document.getElementById('chart6'), rendererConfig);
displayChart(chart7, document.getElementById('chart7'), rendererConfig);

// -- colors lines

displayChart(chart8, document.getElementById('chart8'), rendererConfig);
displayChart(chart9, document.getElementById('chart9'), rendererConfig);
displayChart(chart10, document.getElementById('chart10'), rendererConfig);
displayChart(chart11, document.getElementById('chart11'), rendererConfig);
displayChart(chart12, document.getElementById('chart12'), rendererConfig);

displayChart(chart13, document.getElementById('chart13'), rendererConfig);
displayChart(chart14, document.getElementById('chart14'), rendererConfig);
