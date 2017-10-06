$(".nav-toggle").click(function() {
  if($(".nav-menu").hasClass("is-active")){
    $(".nav-menu").removeClass("is-active");
    $(".nav-menu").children().removeClass("r");
  }else{
    $(".nav-menu").addClass("is-active");
    $(".nav-menu").children().addClass("r");
  }
});

!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
analytics.load("1q9bolFheVqJpc7W06CHw0d9FWWNa3l3");
analytics.page();
}}();

$('.carrusel').owlCarousel({
  items: 1
});

$('.carrusel2').owlCarousel({
  items: 3,
  margin: 50,
  autoplay:true,
  autoplayTimeout:10000,
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
           loop:true,
           dots: true
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


$("#enviar").click(function(){
  console.log("Enviar");
  var nombre = $("#name").val();
  var telefono = $("#phone").val();
  var email = $("#email").val();
  analytics.identify(email, {
    name: nombre,
    phone : telefono,
    email: email
  });
})
