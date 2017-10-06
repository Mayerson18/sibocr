$(document).ready(function(){
  $(".nav-toggle").click(function() {
    if($(".nav-menu").hasClass("is-active")){
      $(".nav-menu").removeClass("is-active");
      $(".nav-menu").children().removeClass("r");
    }else{
      $(".nav-menu").addClass("is-active");
      $(".nav-menu").children().addClass("r");
    }
  });

  ///Firebase

  var config = {
    apiKey: "AIzaSyB3HZSn4xcQU4Q9lRWNz9LIh__bYexQM44",
    authDomain: "sibocr-9c2d0.firebaseapp.com",
    databaseURL: "https://sibocr-9c2d0.firebaseio.com",
    projectId: "sibocr-9c2d0",
    storageBucket: "sibocr-9c2d0.appspot.com",
    messagingSenderId: "88744498646"
  };
  firebase.initializeApp(config);



  function writeNewPost(name,email,cel) {
    // A post entry.
    var postData = {
      nombre: name,
      email: email,
      telefono: cel
    };
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    return firebase.database().ref().update(updates);
  }


//////Fin FIrebase

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

$(".red").text(daysRound)

$('.form').validate({ // initialize the plugin
       rules: {
           name: {
               required: true
           },
           email: {
               required: true,
               email: true
           },
           phone: {
             required: true
           }
       },
       messages: {
         nombre: "Por favor especifica tu nombre",
         email: {
           required: "Necesitamos tu dirección de correo",
           email: "debe ser name@domain.com"
         },
         phone: "Por favor especifica tu numero telefonico"
       },
       submitHandler: function (form) {
         var form = $(form).serializeArray();
         var nombre = form[0].value;
         var email = form[1].value;
         var telefono = form[2].value;
         console.log(nombre)
         console.log(telefono)
         console.log(email)
         analytics.identify(email, {
           name: nombre,
           phone : telefono,
           email: email
         });
         if(nombre && telefono && email)
           toastr.success('Mensaje Enviado')
         writeNewPost(nombre,email,telefono)

         return false;
       }
    });


    $( ".question" ).hover(
      function() {
        
        $("#question").text($(this).text());
        var texto = ($(this).data("text"));
        var p = '';
        for (var i = 0; i < texto.length; i++) {
          p += '<p class="mb p-foot">'
          p += texto[i];
          p += '</p>';
        }
        $("#answer").html(p);
      }
    );


});
