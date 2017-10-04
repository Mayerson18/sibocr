$(".nav-toggle").click(function() {
  if($(".nav-menu").hasClass("is-active")){
    $(".nav-menu").removeClass("is-active");
    $(".nav-menu").children().removeClass("r");
  }else{
    $(".nav-menu").addClass("is-active");
    $(".nav-menu").children().addClass("r");
  }
});

$('.owl-carousel').owlCarousel({
  items: 1
});

$(".click").click(function(){
  console.log("next")
  $(".owl-next").click();
})
