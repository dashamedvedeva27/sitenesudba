gsap.registerPlugin(ScrollTrigger);


gsap.to(".book1", {
  x:1300,
  scrollTrigger: {
    trigger: ".shop",
    start: "3000px 3000px",
    end: "3000px 0px",
    scrub: true,
    // markers:true,
  }
});


gsap.to(".str1", {
  x:-11500,
  scrollTrigger: {
    trigger: ".shop",
    start: "12000px 12000px",
    end: "12000px 0px",
    scrub: true,
    markers:true,
  }
});
