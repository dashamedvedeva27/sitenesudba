gsap.registerPlugin(ScrollTrigger);

gsap.to(".str1", {
  x:-7500,
  scrollTrigger: {
    trigger: ".shop",
    start: "6000px 6000px",
    end: "6000px 0px",
    scrub: true,
    markers:true,
  }
});
