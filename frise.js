gsap.registerPlugin(ScrollTrigger);

let etapes = gsap.utils.toArray(".etape");
console.log(etapes);

gsap.to(etapes, {
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

etapes.forEach((etape, index) => {
  let cercle = etape.querySelector(".cercleEtape svg");

  if (cercle) {
    ScrollTrigger.create({
      trigger: etape,
      start: "30% right", // quand l'étape est à 40% du bord gauche
      end: "10% left", // quand l'étape est au centre de la vue
      onEnter: () => {
        console.log(`onEnter ${index}`, etape);
        gsap.to(cercle, { duration: 0.5, scale: 3, transformOrigin: "center center", y: -100 });
      },
      onLeave: () => {
        console.log(`onLeave ${index}`, etape);
        gsap.to(cercle, { duration: 0.5, scale: 0.2, transformOrigin: "center center", y: 0 });
      },
      onEnterBack: () => {
        console.log(`onEnterBack ${index}`, etape);
        gsap.to(cercle, { duration: 0.5, scale: 3, transformOrigin: "center center", y: -100 });
      },
      onLeaveBack: () => {
        console.log(`onLeaveBack ${index}`, etape);
        gsap.to(cercle, { duration: 0.5, scale: 0.2, transformOrigin: "center center", y: 0 });
      }
    });
  } else {
    console.log(`No cercle found in ${index}`, etape);
  }
});