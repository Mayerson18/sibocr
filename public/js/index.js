$(".nav-toggle").click(function() {
  if($(".nav-menu").hasClass("is-active")){
    $(".nav-menu").removeClass("is-active");
    $(".nav-menu").children().removeClass("r");
  }else{
    $(".nav-menu").addClass("is-active");
    $(".nav-menu").children().addClass("r");
  }
});

$('.carrusel').owlCarousel({
  items: 1
});

$('.carrusel2').owlCarousel({
  items: 3,
  margin: 50,
  autoplay:true,
  autoplayTimeout:5000,
  responsiveClass: true,
  responsive:{
       0:{
           items:1
       },
       600:{
           items:1
       },
       1000:{
           items:3,
           loop:true
       }
   },
});

$(".click").click(function(){
  $(this).parent().parent().parent().parent().parent().find(".owl-nav").find(".owl-next").click();
})

var now = new Date();
var fecha = new Date("2018-06-14 23:46:48 UTC");//La fecha destino del evento
var	days = (fecha - now) / 1000 / 60 / 60 / 24;
var daysRound = Math.floor(days);

$(".red").text(daysRound);
