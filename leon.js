gsap.registerPlugin(ScrollTrigger);

gsap.set("li", {transformOrigin:"0 50%"})
gsap.set("li:not(:first-of-type)", {opacity:0, scale:0.8})

const tl = gsap.timeline()
    .to("li:not(:first-of-type)", 
         {opacity:1, scale:1, stagger:0.5}
        )
   .to("li:not(:last-of-type)", 
         {opacity:0, scale:0.8, stagger:0.5}, 0)

const t2 = gsap.timeline()
    .to("li",
        { y: (i) => `-${i * 100}%`}
    )

    
ScrollTrigger.create({
    trigger: ".disciplines",
    start: "center center",
    endTrigger: "li:last-of-type",
    end: "center center",
    pin: true,
    animation: tl,
    scrub: true,
});

ScrollTrigger.create({
    trigger: ".leon-section",
    start: "center center",
    endTrigger: "li:last-of-type",
    end: "center center",
    pin: true,

    animation: t2,
    scrub: true,
});
