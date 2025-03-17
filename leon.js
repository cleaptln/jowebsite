gsap.registerPlugin(ScrollTrigger);

let items = gsap.utils.toArray(".rotator li");

gsap.to(items, {
    opacity: 1,
    y: 0,
    stagger: 2, // Temps entre chaque apparition
    duration: 0.8,
    scrollTrigger: {
        trigger: ".disciplines",
        start: "top center",
        toggleActions: "play none none none"
    }
});