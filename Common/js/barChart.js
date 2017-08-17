var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
  "columnWidth": 1,
  "dataProvider": [{
    "category": "0"
  }, {
    "category": "1",
    "count": 25
  }, {
    "category": "2",
    "count": 81
  }, {
    "category": "3",
    "count": 73
  }, {
    "category": "4",
    "count": 40
  }, {
    "category": "5",
    "count": 20
  }, {
    "category": "6",
    "count": 7
  }, {
    "category": "7",
    "count": 5
  }, {
    "category": "8",
    "count": 2
  }, {
    "category": "9",
    "count": 2
  }, {
    "category": "10",
    "count": 1
  }, {
    "category": "11"
  }],
  "graphs": [{
    "fillColors": "#c55",
    "fillAlphas": 0.9,
    "lineColor": "#fff",
    "lineAlpha": 0.7,
    "type": "column",
    "valueField": "count"
  }],
  "categoryField": "category",
  "categoryAxis": {
    "startOnAxis": true,
    "title": "Try"
  },
  "valueAxes": [{
    "title": "Count"
  }]
});