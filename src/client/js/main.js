// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

$(function () {
    $('#demographics').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Denver<br>Colorado<br>Demographics<br>2016',
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -40,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Population Demographics',
            innerSize: '50%',
            data: [
                ['White',   70.0],
                ['African American',  5.0],
                ['Asian',    3.0],
                ['Hispanic',     18.0],
                ['Native American', 1.0],
                ['Other',    3.0],
                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
  });
  $(function () {
      $('#age').highcharts({
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: 0,
              plotShadow: false
          },
          title: {
              text: 'Denver<br>Colorado<br>Age Range<br>2016',
              align: 'center',
              verticalAlign: 'middle',
              y: 40
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
              pie: {
                  dataLabels: {
                      enabled: true,
                      distance: -40,
                      style: {
                          fontWeight: 'bold',
                          color: 'white',
                          textShadow: '0px 1px 2px black'
                      }
                  },
                  startAngle: -90,
                  endAngle: 90,
                  center: ['50%', '75%']
              }
          },
          series: [{
              type: 'pie',
              name: 'Population Demographics',
              innerSize: '50%',
              data: [
                  ['0-14',   19.7],
                  ['15-29',  19.9],
                  ['30-44',  22.4],
                  ['45-59',  20.2],
                  ['60-74',  13.0],
                  ['75+',    4.7],
                  {
                      name: 'Proprietary or Undetectable',
                      y: 0.2,
                      dataLabels: {
                          enabled: false
                      }
                  }
              ]
          }]
      });
    });
    $(function () {
        $('#population').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: 'Denver<br>Colorado<br>Age Range<br>2016',
                align: 'center',
                verticalAlign: 'middle',
                y: 40
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -40,
                        style: {
                            fontWeight: 'bold',
                            color: 'white',
                            textShadow: '0px 1px 2px black'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%']
                }
            },
            series: [{
                type: 'pie',
                name: 'Population Demographics',
                innerSize: '50%',
                data: [
                    ['0-14',   19.7],
                    ['15-29',  19.9],
                    ['30-44',  22.4],
                    ['45-59',  20.2],
                    ['60-74',  13.0],
                    ['75+',    4.7],
                    {
                        name: 'Proprietary or Undetectable',
                        y: 0.2,
                        dataLabels: {
                            enabled: false
                        }
                    }
                ]
            }]
        });
      });
});
