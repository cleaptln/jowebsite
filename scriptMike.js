        // // GSAP avec ScrollTrigger pour déplacer le carré et "bloquer" l'écran
        // gsap.registerPlugin(ScrollTrigger);

        // const circle = document.getElementById('circle');
        // const container = document.querySelector('.container');
        // const maxMove = container.clientWidth - circle.clientWidth; // Déplacement maximal

        // // Créer une animation GSAP liée au scroll avec effet "pin"
        // gsap.to(circle, {
        //     x: maxMove, // Déplacement horizontal jusqu'à la fin de la largeur du conteneur
        //     scrollTrigger: {
        //         trigger: ".container", // Déclenche l'animation lorsque le conteneur est visible
        //         start: "top center", // Débute lorsque le haut du conteneur atteint le centre de l'écran
        //         end: "+=1000", // Étend la durée de l'animation sur une distance supplémentaire (1000px)
        //         scrub: true, // Synchronise l'animation avec le défilement
        //         pin: true, // Bloque l'écran sur le conteneur pendant l'animation
        //     }
        // });

        let cercles = document.querySelectorAll('.cercles');
        document.addEventListener("DOMContentLoaded", () => {
            let flags = document.querySelectorAll('.flag');
            let container = document.querySelector('.flags');
    
            container.style.opacity = 0;
            container.style.display = 'flex';
    
            // Phase 1 : Apparition avec flip
            setTimeout(() => {
                container.style.transition = 'opacity 1s';
                container.style.opacity = 1;
    
                gsap.set(flags, { rotateY: 180, opacity: 0 });
    
                flags.forEach((flag, index) => {
                    let delay = Math.random() * 1.5; // Délai aléatoire
    
                    gsap.to(flag, {
                        opacity: 1,
                        rotateY: 0,
                        duration: 1,
                        delay: delay,
                        ease: "back.out(1.7)"
                    });
                });
                
                setTimeout(()=>{
                    let cercles = document.querySelector('.cercles');
                    cercles.style.transition = 'opacity 1s';
                    cercles.style.opacity = 1;
                }, 2000);
                // Phase 2 : Disparition après 5s
                setTimeout(() => {
                    let shuffledFlags = [...flags].sort(() => Math.random() - 0.5); // Mélange aléatoire
    
                    shuffledFlags.forEach((flag, index) => {
                        let delay = index * 0.3; // Décalage progressif
    
                        gsap.to(flag, {
                            opacity: 0,
                            scale: 0.5,
                            duration: 1,
                            delay: delay,
                            ease: "power2.inOut"
                        });
                    });
    
                }, 2000); // Début de la disparition après 5 secondes
            }, 300);
        });
    
    
    gsap.to('#un',{
        duration: 2,
        x: 400,
        y: 700,
        delay: 12,
    })
