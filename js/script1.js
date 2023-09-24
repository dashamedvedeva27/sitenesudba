

function viewDiv(){
  document.getElementById("t1").style.display = "block";
};

gsap.registerPlugin(ScrollTrigger);

gsap.to(".papka", {
  x:-550,
  scrollTrigger: {
    trigger: ".nesydba",
    start: "800px 800px",
    end: "800px 0px",
    scrub: true,
    // markers:true,
  }
});

gsap.to(".papka2", {
  x:-550,
  scrollTrigger: {
    trigger: ".nesydba",
    start: "2000px 800px",
    end: "2000px 0px",
    scrub: true,
    // markers:true,
  }
});

gsap.to(".papka3", {
  x:-550,
  scrollTrigger: {
    trigger: ".nesydba",
    start: "3000px 800px",
    end: "3000px 0px",
    scrub: true,
    // markers:true,
  }
});

gsap.to(".papka4", {
  x:-550,
  scrollTrigger: {
    trigger: ".nesydba",
    start: "4000px 800px",
    end: "4000px 0px",
    scrub: true,
    // markers:true,
  }
});


// $(document).ready(function(){
//   $(".papka").click(function() {
//     $(".t3").removeClass("none");
//   });
// });
