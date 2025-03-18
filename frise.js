gsap.registerPlugin(ScrollTrigger);

let etapes = gsap.utils.toArray(".etape");

if (window.innerWidth > 800) {


let scrollEtape = gsap.to(etapes, {
  xPercent: -100 * (etapes.length - 1),
  ease: "none",
  scrollTrigger: {
    start: "top top+=80",
    trigger: ".etapes",
    scrub: 1,
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

}

if (window.innerWidth < 800) {
  gsap.to('.etape1', {
    y: -innerHeight,
    duration: 0.5,
    ease: "none",
    scale: '1.5',
    scrollTrigger: {
      start: "50% bottom",
      end: "50% left",
      trigger: ".etape1",
      containerAnimation: scrollEtape,
      scrub: true,
      id: '2',
    },
  });

  gsap.to('.etape2', {
    y: -innerHeight,
    duration: 0.5,
    ease: "none",
    scale: '1.5',
    scrollTrigger: {
      start: "10% right",
      end: "50% left",
      trigger: ".etape2",
      containerAnimation: scrollEtape,
      scrub: true,
      id: '2',
    },
  });

  gsap.to('.etape3', {
    y: -innerHeight,
    duration: 0.5,
    ease: "none",
    scale: '1.5',
    scrollTrigger: {
      start: "10% right",
      end: "50% left",
      trigger: ".etape3",
      containerAnimation: scrollEtape,
      scrub: true,
      id: '2',
    },
  });

  gsap.to('.etape4', {
    y: -innerHeight,
    duration: 0.5,
    ease: "none",
    scale: '1.5',
    scrollTrigger: {
      start: "10% right",
      end: "50% left",
      trigger: ".etape4",
      containerAnimation: scrollEtape,
      scrub: true,
      id: '2',
    },
  });
}





if (window.innerWidth < 450 ) {
  let scrollEtape2 = gsap.to(etapes, {
    x: 0,
    ease: "none",
    scrollTrigger: {
      start: "top top+=80",
      trigger: ".etapes",
      scrub: 1,
      pin: true,
      scrub: 1,
      snap: 1 / (etapes.length - 1),
      end: () => "+=" + document.querySelector(".etapes").offsetWidth
    }
  });
  
  gsap.to('.etape1', {
    y: 0,
    duration: 0.5,
    ease: "none",
    scale: '1.5',
    scrollTrigger: {
      start: "50% bottom",
      end: "50% left",
      trigger: ".etape1",
      containerAnimation: scrollEtape2,
      scrub: true,
      id: '2',
    },
  });

  gsap.to('.etape2', {
    y: 0,
    duration: 0.5,
    ease: "none",
    scale: '1.5',
    scrollTrigger: {
      start: "10% right",
      end: "50% left",
      trigger: ".etape2",
      containerAnimation: scrollEtape2,
      scrub: true,
      id: '2',
    },
  });

  gsap.to('.etape3', {
    y: 0,
    duration: 0.5,
    ease: "none",
    scale: '1.5',
    scrollTrigger: {
      start: "10% right",
      end: "50% left",
      trigger: ".etape3",
      containerAnimation: scrollEtape2,
      scrub: true,
      id: '2',
    },
  });

  gsap.to('.etape4', {
    y: 0,
    duration: 0.5,
    ease: "none",
    scale: '1.5',
    scrollTrigger: {
      start: "10% right",
      end: "50% left",
      trigger: ".etape4",
      containerAnimation: scrollEtape2,
      scrub: true,
      id: '2',
    },
  });
}