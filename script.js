window.addEventListener("scroll",function(){
    let scroll = document.documentElement.scrollTop;
    console.log(scroll);
    if(scroll>300){
        document.querySelector("h1").classList.add("mv");
        document.querySelector("h1").classList.remove("mv2");
    }else if(scroll == 0 ){
        document.querySelector("h1").classList.remove("mv");
        document.querySelector("h1").classList.add("mv2");
    }
});

$(function() {
    var pos = $("nav").offset().top;
    var height = $("nav").outerHeight();
    $(window).scroll(function () {
        if ($(this).scrollTop() > pos) {
            $("nav").addClass("fix");
            $("body").css("padding-top", height);
        } else {
            $("nav").removeClass("fix");
            $("body").css("padding-top", 0);
        }
    });
});

$(function() {
    $(window).scroll(function () {
        $('.fadein').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > targetElement - windowHeight + 300){
                $(this).addClass('scrollin');
            }
        })
    })
})

$(window).on('scroll',function(){
  $(".lineAnimation").each(function(){
    let position = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll > position - windowHeight + 400){
      $(this).addClass('isActive');
    }
  });
});

var ctx = document.getElementById("myRadarChart");
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ["HTML", "CSS", "Javascript", "PHP", "Java"],
      datasets: [
        {
            data: [7,6,4,8,3],
            label: "学習度",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderCapStyle: "butt",
            borderColor: "rgba(0,0,0,1)",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 3,
            fill: false,
            order: 0,
            lineTension: 0
        }
      ]
    },
    options: {
      scales: {
        r: {
          max: 10,         
          min: 0,         
          ticks: {
            stepSize: 1   
          },
          pointLabels:{     
            fontSize: 16,    
            fontColor: "blue"
          }
        }
      },
    },
});

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert("メールアドレスをコピーしました : " + text);
}