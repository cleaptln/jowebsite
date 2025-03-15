const or = document.querySelector('.podium-or');
const argent = document.querySelector('.podium-argent');
const bronze = document.querySelector('.podium-bronze');


gsap.registerPlugin(ScrollTrigger);

gsap.to('.podium-or', {
    height: '300px', 
    delay: 3.6,
    duration: 1.5, 
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: '.podium-section',
        start: 'bottom 500px',
    }
});


gsap.to('.podium-argent', {
    height: '200px', 
    delay: 3.3,
    duration: 1.5, 
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: '.podium-section',
        start: 'bottom 500px',
    }
});
gsap.to('.podium-bronze', {
    height: '150px', 
    delay: 3,
    duration: 1.5, 
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: '.podium-section',
        start: 'bottom 500px',
    }
});
