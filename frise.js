gsap.registerPlugin(ScrollTrigger);




let etapes = gsap.utils.toArray(".etape");
console.log(etapes);

let scrollEtape = gsap.to(etapes, {
  xPercent: -100 * (etapes.length - 1),
  ease: "none",
  scrollTrigger: {
    start: "top top+=80",
    trigger: ".etapes",
    pin: true,
    scrub: 1,
    snap: 1 / (etapes.length - 1),
    end: () => "+=" + document.querySelector(".etapes").offsetWidth
  }
});


gsap.to('.etape1', {
  y:-innerHeight,
  duration: 0.5,
  ease: "none",
  scale:'3',
  scrollTrigger: {
    start: "50% bottom",
    end: "50% left",
    trigger: ".etape1",
    containerAnimation : scrollEtape,
    scrub:true,
    id:'2',
  },
});


gsap.to('.etape2', {
  y:-innerHeight,
  duration: 0.5,
  ease: "none",
  scale:'3',
  scrollTrigger: {
    start: "10% right",
    end: "50% left",
    trigger: ".etape2",
    containerAnimation : scrollEtape,
    scrub:true,
    id:'2',
  },
});


gsap.to('.etape3', {
  y:-innerHeight,
  duration: 0.5,
  ease: "none",
  scale:'3',
  scrollTrigger: {
    start: "10% right",
    end: "50% left",
    trigger: ".etape3",
    containerAnimation : scrollEtape,
    scrub:true,
    id:'2',
  },
});


gsap.to('.etape4', {
  y:-innerHeight,
  duration: 0.5,
  ease: "none",
  scale:'3',
  scrollTrigger: {
    start: "10% right",
    end: "50% left",
    trigger: ".etape4",
    containerAnimation : scrollEtape,
    scrub:true,
    id:'2',
  },
});

