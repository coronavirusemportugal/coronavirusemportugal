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

    $.ajax({
        url: "https://europe-west2-coronavirusportugal.cloudfunctions.net/data",
        type: "GET",
    })
    .done(function(data) {
        //alert("success");
        var pt = JSON.parse(data);
        var cases      = pt["cases"];
        var deaths     = pt["deaths"];
        var todayCases = pt["todayCases"];
         
        $('#deaths').html(deaths);
        $('#infected').html(cases);
        if (todayCases > 0) {
            $('#infectedTodayNumber').html(todayCases);
            $('#infectedToday').show();
        }
        else {
            $('#infectedToday').hide();
        }

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
});