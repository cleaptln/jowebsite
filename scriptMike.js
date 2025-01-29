        // GSAP avec ScrollTrigger pour déplacer le carré et "bloquer" l'écran
        gsap.registerPlugin(ScrollTrigger);

        const circle = document.getElementById('circle');
        const container = document.querySelector('.container');
        const maxMove = container.clientWidth - circle.clientWidth; // Déplacement maximal

        // Créer une animation GSAP liée au scroll avec effet "pin"
        gsap.to(circle, {
            x: maxMove, // Déplacement horizontal jusqu'à la fin de la largeur du conteneur
            scrollTrigger: {
                trigger: ".container", // Déclenche l'animation lorsque le conteneur est visible
                start: "top center", // Débute lorsque le haut du conteneur atteint le centre de l'écran
                end: "+=1000", // Étend la durée de l'animation sur une distance supplémentaire (1000px)
                scrub: true, // Synchronise l'animation avec le défilement
                pin: true, // Bloque l'écran sur le conteneur pendant l'animation
            }
        });