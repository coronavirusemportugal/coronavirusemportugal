
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    var chart_options = {
      chart: {
        height: 380,
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
      }
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
        $.each(pt['history'] , function(index, val) {
          infected_series.push({x:val['date'],y:val['infected']});
        });

        // Fill in chart
        chart.updateSeries([{
            name: "Infetados",
            data: infected_series
        }]);
    
        })
        .fail(function() {
            console.log("error");
        });
    }
    
        // timer to refresh data automatically
    function initTimer() {
        var refreshDataDelay = 10000;

        setInterval(function(){
                getData();
        },refreshDataDelay);
    }


    function chunk (arr, len) {

        var chunks = [],
            i = 0,
            n = arr.length;
      
        while (i < n) {
          chunks.push(arr.slice(i, i += len));
        }
      
        return chunks;
      }

      
    function getNews() {
        $.ajax({
            url: "https://us-central1-coronavirusportugal.cloudfunctions.net/news",
            type: "GET",
        })
        .done(function(data) {
           //alert("success");
           var template = Handlebars.templates.news;
           $('#news').html(template(chunk(data.slice(0, 10),2)));
    
        })
        .fail(function() {
            console.log("error");
        });
    }
    getData();
    getNews();
    initTimer();

    
    
    
   /*==================================================================
    [ Simple slide100 ]*/

    $('.simpleslide100').each(function(){
        var delay = 7000;
        var speed = 1000;
        var itemSlide = $(this).find('.simpleslide100-item');
        var nowSlide = 0;

        $(itemSlide).hide();
        $(itemSlide[nowSlide]).show();
        nowSlide++;
        if(nowSlide >= itemSlide.length) {nowSlide = 0;}

        setInterval(function(){
            $(itemSlide).fadeOut(speed);
            $(itemSlide[nowSlide]).fadeIn(speed);
            nowSlide++;
            if(nowSlide >= itemSlide.length) {nowSlide = 0;}
        },delay);
    });


})(jQuery);
