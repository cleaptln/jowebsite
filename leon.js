gsap.registerPlugin(ScrollTrigger);


let discipline = gsap.utils.toArray(".discipline");

let scrollEtape = gsap.to(discipline, {
    yPercent: -100 * (discipline.length - 1),
    ease: "none",
    scrollTrigger: {
      start: "top top",
      trigger: ".leon-section",
      pin: true,
      scrub: 1,
      snap: 1 / (discipline.length - 1), // Ajoute un effet aimanté
      end: () => "+=" + document.querySelector(".rotator").offsetHeight
    }
  });
