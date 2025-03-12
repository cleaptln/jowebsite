document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(MotionPathPlugin);

    const medals = document.querySelectorAll('.med');
    const radius = 150; // Rayon de l'arc de cercle

    medals.forEach((medal, index) => {
        const delay = index * 0.5; // Délai pour chaque médaille

        gsap.timeline({ repeat: -1, yoyo:true })
            .to(medal, {
                duration: 1,
                delay: delay,
                motionPath: {
                    path: [
                        { x: radius * Math.cos(270 * (Math.PI / 180)), y: radius * Math.sin(270 * (Math.PI / 180)) },
                        { x: radius * Math.cos(225 * (Math.PI / 180)), y: radius * Math.sin(225 * (Math.PI / 180)) },
                        { x: radius * Math.cos(180 * (Math.PI / 180)), y: radius * Math.sin(180 * (Math.PI / 180)) },
                        { x: radius * Math.cos(135 * (Math.PI / 180)), y: radius * Math.sin(135 * (Math.PI / 180)) },
                        { x: radius * Math.cos(90 * (Math.PI / 180)), y: radius * Math.sin(90 * (Math.PI / 180)) }
                    ],
                    curviness: 1.5,
                    autoRotate: true
                },
                ease: "power1.inOut"
            })
            .to(medal, {
                duration: 0.5,
                motionPath: {
                    path: [{ x: radius * Math.cos(90 * (Math.PI / 180)), y: radius * Math.sin(90 * (Math.PI / 180)) }],
                    curviness: 1.5,
                    autoRotate: true
                },
                ease: "power1.inOut"
            })
            .to(medal, {
                duration: 1,
                motionPath: {
                    path: [
                        { x: radius * Math.cos(135 * (Math.PI / 180)), y: radius * Math.sin(135 * (Math.PI / 180)) },
                        { x: radius * Math.cos(180 * (Math.PI / 180)), y: radius * Math.sin(180 * (Math.PI / 180)) },
                        { x: radius * Math.cos(225 * (Math.PI / 180)), y: radius * Math.sin(225 * (Math.PI / 180)) },
                        { x: radius * Math.cos(270 * (Math.PI / 180)), y: radius * Math.sin(270 * (Math.PI / 180)) }
                    ],
                    curviness: 1.5,
                    autoRotate: true
                },
                ease: "power1.inOut"
            });
    });
});