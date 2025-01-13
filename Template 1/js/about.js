document.addEventListener("DOMContentLoaded", () => {
    // --------------------------------
    // Animaciones de la sección 2
    // --------------------------------
    const image = document.querySelector(".transform-img");
    const p1 = document.querySelector(".p1");
    const countersSection = document.querySelector(".counters");
    const counters = document.querySelectorAll(".count");

    // Función para animar los contadores
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const speed = 10; // Velocidad de incremento (ms)

            const increment = () => {
                if (count < target) {
                    count++;
                    counter.textContent = count;
                    setTimeout(increment, speed);
                } else {
                    counter.textContent = target;
                }
            };
            increment();
        });
    };

    // Función que maneja la animación en el scroll de la sección 2
    const animateSec2OnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Iniciar las animaciones específicas de la sección 2
                animateCounters();
                image.classList.add('zoom-img');
                p1.classList.add('slide-left');
                countersSection.classList.add('slide-right');

                // Dejar de observar la sección 2
                observer.unobserve(entry.target);
            }
        });
    };

    // Crear un observador de intersección para la sección 2
    const sec2Observer = new IntersectionObserver(animateSec2OnScroll, {
        root: null,
        threshold: 0.1 // Activar cuando al menos el 10% del elemento es visible
    });

    // Observar la sección 2
    const targetSection2 = document.querySelector('.sec2');
    sec2Observer.observe(targetSection2);

    // --------------------------------
    // Animaciones de la sección 3
    // --------------------------------
    const elementsToAnimate = document.querySelectorAll(".sec3 .text-center, .sec3 .col-md-3, .sec5 .text-center, .sec5 .col-md-3, .sec6 .text-center");

    // Función que maneja la animación en cascada para la sección 3
    const animateSec3OnScroll = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Aplicar la animación con retraso en cascada
                setTimeout(() => {
                    entry.target.classList.add("animate-slideUp");
                }, index * 200); // 200ms entre cada elemento
                observer.unobserve(entry.target); // Dejar de observar después de animar
            }
        });
    };

    // Crear un observador de intersección para la sección 3
    const sec3Observer = new IntersectionObserver(animateSec3OnScroll, {
        root: null,
        threshold: 0.1 // Activar cuando al menos el 10% del elemento es visible
    });

    // Observar cada elemento de la sección 3
    elementsToAnimate.forEach((element) => sec3Observer.observe(element));

    // --------------------------------
    // Animaciones de la sección 4
    // --------------------------------
    const section4Elements = document.querySelectorAll(".sec4 .sp1, .sec4 .p2");

    // Función que maneja la animación para la sección 4
    const animateSec4OnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("sp1")) {
                    entry.target.classList.add("animate-slideInLeft");
                } else if (entry.target.classList.contains("p2")) {
                    entry.target.classList.add("animate-slideInRight");
                }
                observer.unobserve(entry.target); // Dejar de observar después de animar
            }
        });
    };

    // Crear un observador de intersección para la sección 4
    const sec4Observer = new IntersectionObserver(animateSec4OnScroll, {
        root: null,
        threshold: 0.1 // Activar cuando al menos el 10% del elemento es visible
    });

    // Observar los elementos de la sección 4
    section4Elements.forEach((element) => sec4Observer.observe(element));

    // --------------------------------
    // Animaciones de la sección 6 (Blog)
    // --------------------------------
    const blogCards = document.querySelectorAll('.blog-card');

    // Función que maneja la animación de las tarjetas de blog
    const animateBlogCardsOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-zoomIn'); // Agregar clase para la animación de zoom
                observer.unobserve(entry.target); // Dejar de observar después de animar
            }
        });
    };

    // Crear un observador de intersección para las tarjetas de blog
    const blogCardsObserver = new IntersectionObserver(animateBlogCardsOnScroll, {
        root: null,
        threshold: 0.1 // Activar cuando al menos el 10% del elemento es visible
    });

    // Observar cada tarjeta de blog
    blogCards.forEach((card) => blogCardsObserver.observe(card));
});
