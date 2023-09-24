
gsap.registerPlugin(ScrollTrigger);

gsap.to(".shop", {
  x:-2200,
  scrollTrigger: {
    trigger: ".shop",
    start: "5000px 5000px",
    end: "5000px 0px",
    scrub: true,
    // markers:true,
  }
});

// $(document).ready(function(){
//   $(".cola1").mouseover(function() {
//     $(".cola2").show();
// });
//
// $(".cola1").mouseover(function() {
//   $(".cola2").hide();
// });
// });

// $( document ).ready(function(){
// 	  $( "cola2" ).click(function(){ // задаем функцию при нажатиии на элемент <button>
// 	    $( "cola2" ).replaceWith( "cola1" ); // заменяем каждый целевой элемент новым содержимым
// 	  });
// 	});

$(document).ready(function(){
  $(".cola1").click(function() {
    $(".cola2").removeClass("none");
    $(".cola2").addClass("none");
  });
});
