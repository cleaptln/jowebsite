const or = document.querySelector('.podium-or');
const argent = document.querySelector('.podium-argent');
const bronze = document.querySelector('.podium-bronze');


gsap.registerPlugin(ScrollTrigger);
let animationTriggered = false;

window.addEventListener("scroll", () => {
    if (!animationTriggered && window.scrollY > 100) { // Déclenche après 100px de scroll
        animationTriggered = true;
gsap.to('.podium-or', {
    height: '300px', 
    delay: 0.5,
    duration: 1.5, 
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: '.podium-section',
        start: "top 90%", // Déclenche lorsque le haut de la section atteint 90% de la hauteur de la fenêtre
        end: "bottom 20%", // L'animation continue jusqu'à ce que le bas de la section atteigne 20% de la fenêtre
    }
});




gsap.to('.podium-argent', {
    height: '200px', 
    delay: 0.3,
    duration: 1.5, 
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: '.podium-section',
        start: "top 90%", // Déclenche lorsque le haut de la section atteint 90% de la hauteur de la fenêtre
        end: "bottom 20%", // L'animation continue jusqu'à ce que le bas de la section atteigne 20% de la fenêtre
    }
    
});

gsap.to('.podium-bronze', {
    height: '150px', 
    delay: 0.1,
    duration: 1.5, 
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: '.podium-section',
        start: "top 90%", // Déclenche lorsque le haut de la section atteint 90% de la hauteur de la fenêtre
        end: "bottom 20%", // L'animation continue jusqu'à ce que le bas de la section atteigne 20% de la fenêtre
    }
    
});
    }});