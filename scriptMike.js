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
            let flagsContainer = document.querySelector('.flags');
            let flags = document.querySelectorAll('.flag');
        
            flagsContainer.style.opacity = 0;
            flagsContainer.style.display = 'flex';
        
            // Initialisation : Masquer les cercles et préparer les drapeaux
            flags.forEach(flag => {
                let cercle = flag.querySelector('.cercle'); 
                if (cercle) {
                    cercle.style.opacity = 0;
                    cercle.style.visibility = "hidden";
                }
            });
        
            // Phase 1 : Apparition des drapeaux
            setTimeout(() => {
                flagsContainer.style.transition = 'opacity 1s';
                flagsContainer.style.opacity = 1;
        
                gsap.set(flags, { rotateY: 180, opacity: 0 });
        
                flags.forEach((flag, index) => {
                    let delay = Math.random() * 1;
        
                    gsap.to(flag, {
                        opacity: 1,
                        rotateY: 0,
                        duration: 0.6,
                        delay: delay,
                        ease: "back.out(1.7)"
                    });
                });
        
                // Phase 2 : Disparition progressive des drapeaux SANS toucher les cercles
                setTimeout(() => {
                    let shuffledFlags = [...flags].sort(() => Math.random() - 0.5);
        
                    shuffledFlags.forEach((flag, index) => {
                        let delay = index * 0.075;
                        let cercle = flag.querySelector('.cercle');
        
                        // On fait disparaître uniquement le "contenu" du drapeau, pas la div entière
                        gsap.to(flag, {
                            backgroundSize: "0% 0%", // Rétrécir le fond
                            border: "none", // Supprimer la bordure (si besoin)
                            duration: 0.5,
                            delay: delay,
                            ease: "power2.inOut",
                            onComplete: () => {
                                if (cercle) {
                                    console.log("Affichage du cercle :", cercle);
                                    gsap.to(cercle, {
                                        opacity: 1,
                                        duration: 0.5,
                                        ease: "power2.out",
                                        onStart: () => {
                                            cercle.style.visibility = "visible";
                                        }
                                    });
                                }
                            }
                        });
                    });
                }, 2000);
            }, 300);
        });
        
        
// Sélection des drapeaux
let drapeaux = [
    document.querySelector('.flag:nth-child(1)'),
    document.querySelector('.flag:nth-child(24)'),
    document.querySelector('.flag:nth-child(8)'),
    document.querySelector('.flag:nth-child(11)'),
    document.querySelector('.flag:nth-child(26)')
];

// // Animation des drapeaux vers le centre de la div.flags
// drapeaux.forEach(drapeau => {
//     console.log(drapeau),
//     gsap.to(drapeau, {
//         duration: 1,
//         delay: 12,
//         ease: "power2.inOut"
//     });
// });


// Sélection des drapeaux
document.addEventListener("DOMContentLoaded", () => {
    let flagsContainer = document.querySelector('.flags');
    let drapeaux = [
        document.querySelector('.flag:nth-child(1)'),
        document.querySelector('.flag:nth-child(24)'),
        document.querySelector('.flag:nth-child(8)'),
        document.querySelector('.flag:nth-child(11)'),
        document.querySelector('.flag:nth-child(26)')
    ];

    let containerRect = flagsContainer.getBoundingClientRect();
    let centerX = containerRect.width / 2;
    let centerY = containerRect.height / 2;
    let anneauxH = [
        document.querySelector('.anneau1'),
        document.querySelector('.anneau5'),
        document.querySelector('.anneau3'),
    ]
    let anneauxB = [
        document.querySelector('.anneau2'),
        document.querySelector('.anneau4'),
    ]
    drapeaux.forEach(drapeau => {
        let flagRect = drapeau.getBoundingClientRect();

        let offsetX = centerX - (flagRect.width / 2) - (flagRect.left - containerRect.left);
        let offsetY = centerY - (flagRect.height / 2) - (flagRect.top - containerRect.top);

        gsap.to(drapeau, {
            x: offsetX,
            y: offsetY,
            duration: 1,
            delay: 6.2,
            ease: "power2.inOut"
        });
        gsap.to(drapeau, {
            opacity: 0,
            scale : 0,
            duration: 1,
            delay: 6.5,
            ease: "power2.inOut"
    });
});

    if(window.innerWidth < 600){
        let decalH = 200
        let decal = 250
        let descendre = 50
    anneauxH.forEach(anneau => {

        gsap.to(anneau, {
            x : decalH,
            scale: 8,
            opacity: 1,
            duration: 1,
            delay: 7,
            ease: "power2.inOut"
        });
        decalH+=100
    });

    anneauxB.forEach(anneau => {

        gsap.to(anneau, {
            x : decal,
            y : descendre,
            scale: 8,
            opacity: 1,
            duration: 1,
            delay: 7,
            ease: "power2.inOut"
        });
        decal+=100
    });

    let allanneaux = document.querySelector('.allanneaux') ;
    console.log(allanneaux);
    gsap.to(allanneaux, {
        x : -300,
        opacity: 1,
        duration: 1,
        delay: 7,
        ease: "power2.inOut"
    });
}    else{
        let decalH = 200
        let decal = 300
        let descendre = 100
        anneauxH.forEach(anneau => {

        gsap.to(anneau, {
            x : decalH,
            scale: 17,
            opacity: 1,
            duration: 1,
            delay: 7,
            ease: "power2.inOut"
        });
        decalH+=210
    });

    anneauxB.forEach(anneau => {

        gsap.to(anneau, {
            x : decal,
            y : descendre,
            scale: 17,
            opacity: 1,
            duration: 1,
            delay: 7,
            ease: "power2.inOut"
        });
        decal+=210
    });

    let allanneaux = document.querySelector('.allanneaux') ;
    console.log(allanneaux);
    gsap.to(allanneaux, {
        x : -420,
        opacity: 1,
        duration: 1,
        delay: 7,
        ease: "power2.inOut"
    });
}

    gsap.registerPlugin(ScrollTrigger);

    let animationTriggered = false;
    
    window.addEventListener("scroll", () => {
        if (!animationTriggered && window.scrollY > 100) { // Déclenche après 100px de scroll
            animationTriggered = true;

            gsap.to(".allanneaux div", {
                borderColor: "white",
                duration: 0.5
            });

            gsap.to(".center", {
                backgroundColor: "rgb(17, 17, 69)",
                duration: 0.5
            });
            gsap.to("body", {
                backgroundColor: "rgb(17, 17, 69)",
                duration: 0.5
            });
        }
    });
});

/*
document.body.classList.add("no-scroll");

setTimeout(() => {
    document.body.classList.remove("no-scroll");
}, 8000);
*/
