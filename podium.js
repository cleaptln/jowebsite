const podiums = document.querySelector('.podium-container');
const or = document.querySelector('.podium-or');
const argent = document.querySelector('.podium-argent');
const bronze = document.querySelector('.podium-bronze');


gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);

ScrollTrigger.create({
    trigger: podiums,
    start: "bottom bottom-=50",
    onEnter: () => {
        gsap.to(or, { height: '300px', delay: 0.4, duration: 1, ease: "power2.inOut" });
        gsap.to(argent, { height: '200px', delay: 0.2, duration: 1, ease: "power2.inOut" });
        gsap.to(bronze, { height: '150px', duration: 1, ease: "power2.inOut" });
    },
    onLeave: () => {
        gsap.to(or, { height: '50px', duration: 0.5, ease: "power2.inOut" });
        gsap.to(argent, { height: '50px', duration: 0.5, ease: "power2.inOut" });
        gsap.to(bronze, { height: '50px', duration: 0.5, ease: "power2.inOut" });
    },  
});



gsap.to(".bmx", {
    motionPath: {
        path: [
            { x: 0, y: 0 },   // Départ
            { x: window.innerWidth / 2, y: -150 }, // Milieu de l'écran, monte un peu
            { x: window.innerWidth, y: 0 }  // Arrivée, redescend
        ],
        curviness: 1.5, // Adoucit la courbe
        autoRotate: true // Oriente le BMX dans la direction
    },
    duration: 2, // Temps total de l’animation
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: 1, // Animation fluide avec le scroll
    }
});

