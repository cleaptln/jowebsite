gsap.registerPlugin(ScrollTrigger);

let etapes = gsap.utils.toArray(".etape");

gsap.to(etapes, {
  xPercent: -100 * (etapes.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".etapes",
    pin: true,
    scrub: 1,
    snap: 1 / (etapes.length - 1),
    end: () => "+=" + document.querySelector(".etapes").offsetWidth
  }
});


etapes.forEach((etape) => {
    const cercle = etape.querySelector(".cercleEtape svg");

    ScrollTrigger.create({
        trigger: etape,
        start: "left center", // when the etape is in the center of the viewport
        end: "right center", // when the etape is in the center of the viewport
        onEnter: () => gsap.to(cercle, { duration: 0.5, scale: 3, transformOrigin: "center center", y: -100 }),
        onLeave: () => gsap.to(cercle, { duration: 0.5, scale: 0.2, transformOrigin: "center center", y: 0 }),
        onEnterBack: () => gsap.to(cercle, { duration: 0.5, scale: 3, transformOrigin: "center center", y: -100 }),
        onLeaveBack: () => gsap.to(cercle, { duration: 0.5, scale: 0.2, transformOrigin: "center center", y: 0 })
    });
});