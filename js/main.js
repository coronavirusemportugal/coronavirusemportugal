$( document ).ready(function() {

    var chart_options = {
      chart: {
        height: 305,
        width: '100%',
        type: "area",
        animations: {
          initialAnimation: {
            enabled: false
          }
        }
      },
      tooltip: {
      },
      dataLabels: {
        enabled: false
      },
      series: [
      ],
      xaxis: {
        type: "datetime"
      },
      colors: ['#2E93fA', '#e74a3b', '#546E7A', '#E91E63', '#FF9800']
    };
    
    var chart = new ApexCharts(document.querySelector("#chart"), chart_options);
    
    chart.render();

    function getData() {
        $.ajax({
            url: "https://europe-west2-coronavirusportugal.cloudfunctions.net/data",
            type: "GET",
        })
        .done(function(data) {
            //alert("success");
            var pt = JSON.parse(data);
            var cases       = pt["cases"];
            var deaths      = pt["deaths"];
            var active      = pt["active"];
            var recovered   = pt["recovered"];
            var todayCases  = pt["todayCases"];
            var todayDeaths = pt["todayDeaths"];
             
            $('#deaths').html(deaths);
            if (todayDeaths > 0) {
                $('#deathsTodayNumber').html(todayDeaths);
                $('#deathsToday').show();
            }
            else {
                $('#deathsToday').hide();
            }
    
            $('#infected').html(cases);
            if (todayCases > 0) {
                $('#infectedTodayNumber').html(todayCases);
                $('#infectedToday').show();
            }
            else {
                $('#infectedToday').hide();
            }
            $('#recovered').html(recovered);
            $('#active').html(active);
    
            var infected_series = [];
            var deaths_series    = [];
            $.each(pt['history'] , function(index, val) {
              infected_series.push({x:val['date'],y:val['infected']});
              deaths_series.push({x:val['date'],y:val['dead']});
            });
    
            // Fill in chart
            chart.updateSeries([
              {
                name: "Infetados",
                data: infected_series
              },
              {
                name: "Óbitos",
                data: deaths_series
              }
    
            ]);
    
        })
        .fail(function() {
            console.log("error");
        });
    }

    HandlebarsIntl.registerWith(Handlebars);

    function getNews() {
        $.ajax({
            url: "https://us-central1-coronavirusportugal.cloudfunctions.net/news",
            type: "GET",
        })
        .done(function(data) {
           //alert("success");
           var template = Handlebars.templates.news;
           data.sort(function compare(a, b) {
            var dateA = new Date(a.published);
            var dateB = new Date(b.published);
            return dateB - dateA;
          });
           $('#news').html(template(data.slice(0, 10)));
    
        })
        .fail(function() {
            console.log("error");
        });
    }

    getData();
    getNews();
});
