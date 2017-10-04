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
  autoplayTimeout:5000
});

$(".click").click(function(){
  console.log("next")
  $(".owl-next").click();
})
