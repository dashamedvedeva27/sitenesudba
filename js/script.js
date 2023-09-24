gsap.registerPlugin(ScrollTrigger);


gsap.to(".d1", {
  scale: 12,
  easy: "easy-in",
  scrollTrigger: {
    trigger: ".d1",
    start: "3200px 3200px",
    end: "3200px 0px",
    scrub: true,
    // markers:true,
  }
});

gsap.to(".nesydba", {
  x:-4500,
  scrollTrigger: {
    trigger: ".nesydba",
    start: "5500px 5500px",
    end: "5500px 0px",
    scrub: true,
    // markers:true,
  }
});

gsap.to(".v1", {
  x:-4520,
  scrollTrigger: {
    trigger: ".v1",
    start: "5500px 5500px",
    end: "5500px 0px",
    scrub: true,
    // markers:true,
  }
});

// const overlay = document.querySelector('.overlay')
//
// window.addEventListener('mousemove', (e) => {
//     const { clientX, clientY } = e;
//     const x = Math.round((clientX / window.innerWidth) * 100);
//     const y = Math.round((clientY / window.innerHeight) * 100);
//
//     gsap.to(overlay, {
//         '--x': `${x}%`,
//         '--y': `${y}%`,
//         duration: 0.3,
//         // ease: 'sine.out',
//     })
// })
// gsap.to(".line", {
//   x:-4500,
//   scrollTrigger: {
//     trigger: ".line",
//     start: "5500px 5500px",
//     end: "5500px 0px",
//     scrub: true,
//     markers:true,
//   }
// });
