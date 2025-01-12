document.addEventListener("DOMContentLoaded", () => {
    // Opciones para el primer observer (para la imagen de la sección 3)
    const observerOptionsImage = { 
        root: null, 
        threshold: 0.1 // Se activa cuando el 10% de la imagen es visible en la ventana
    };

    const animateOnScrollImage = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Añadir clase para la animación
                observer.unobserve(entry.target); // Dejar de observar una vez animada
            }
        });
    };

    const observerImage = new IntersectionObserver(animateOnScrollImage, observerOptionsImage);
    const image = document.querySelector(".sec3 img");

    observerImage.observe(image);   

    // Opciones para el segundo observer (para las imágenes y tarjetas de la sección 2)
    const observerOptionsElements = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
    };

    const animateOnScrollElements = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target;

                // Añadir la clase de animación según el tipo de elemento
                if (target.classList.contains("ima")) {
                    target.classList.add("animate-slideInLeft");
                    entry.target.style.opacity = '1';
                } else if (target.classList.contains("card")) {
                    target.classList.add("animate-slideInRight");
                }

                // Dejar de observar el elemento si ya fue animado
                observer.unobserve(target);
            }
        });
    };

    const observerElements = new IntersectionObserver(animateOnScrollElements, observerOptionsElements);

    // Seleccionar los elementos de la sección 2 a observar
    const elementsToAnimate = document.querySelectorAll(".sec2 .ima, .sec2 .c1");

    elementsToAnimate.forEach((el) => observerElements.observe(el)); // Observar las imágenes y tarjetas de la sección 2

    // Opciones para el tercer observer (para los textos de la sección 3)
    const observerOptionsText = { 
        root: null,
        threshold: 0.1 // Se activa cuando el 10% del texto es visible
    };

    const animateOnScrollText = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                // Añadir la clase de animación al texto
                if (target.classList.contains("t1")) {
                    target.classList.add("animate-slideInLeft");
                } else if (target.classList.contains("t2")) {
                    target.classList.add("animate-slideInRight");
                }
                observer.unobserve(entry.target); // Dejar de observar el elemento después de la animación
            }
        });
    };

    const observerText = new IntersectionObserver(animateOnScrollText, observerOptionsText);

    // Seleccionar los textos de la sección 3 a observar
    const textsToAnimate = document.querySelectorAll(".sec3 .t1, .sec3 .t2");

    textsToAnimate.forEach((el) => observerText.observe(el)); // Observar los textos de la sección 3

    // Seleccionar las tarjetas de la sección 4
    const cards = document.querySelectorAll('.sec4 .card.c2');

    // Función para aplicar la animación a cada tarjeta con un retraso cuando entren en la vista
    function animateCardsOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                // Configura el retraso de la animación para cada tarjeta
                const index = Array.from(cards).indexOf(target);

                setTimeout(() => {
                    target.style.opacity = '1'; // Hace la tarjeta visible
                    target.style.transform = 'translateY(0)'; // Desliza la tarjeta hacia su posición
                }, index * 200); // Retraso de 200ms por tarjeta para el efecto en cascada

                observer.unobserve(target); // Dejar de observar una vez animada
            }
        });
    }

    // Opciones para observar las tarjetas
    const observerCards = new IntersectionObserver(animateCardsOnScroll, {
        root: null,
        threshold: 0.1 // Se activa cuando el 10% de la tarjeta es visible
    });

    // Observar las tarjetas de la sección 4
    cards.forEach(card => observerCards.observe(card));  

    const observerOptionsH2 = { 
        root: null,
        threshold: 0.1 // Se activa cuando el 10% del h2 es visible
    };

    const animateOnScrollH2 = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Agregar un retraso para que sea el último en animarse
                setTimeout(() => {
                    entry.target.style.opacity = '1'; // Hace el h2 visible
                    entry.target.style.transform = 'translateY(0)'; // Desliza el h2 hacia su posición
                }, 1000); // Retraso de 1 segundo (ajusta este valor a tu preferencia)
                
                observer.unobserve(entry.target); // Deja de observar una vez animado
            }
        });
    };

    const observerH2 = new IntersectionObserver(animateOnScrollH2, observerOptionsH2);
    
    // Seleccionar el h2 de la sección 4 a observar
    const h2 = document.querySelector(".sec4 h2");

    observerH2.observe(h2);

    const counters = document.querySelectorAll(".count");

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const speed = 50; // Velocidad de incremento (ms)

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

    // Activar la animación cuando la sección 5 entra en vista
    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters(); // Iniciar la animación de los contadores
                observer.unobserve(entry.target); // Dejar de observar después de la animación
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);
    observer.observe(document.querySelector(".sec5")); // Observar la sección 5

    // Animación para el título de la sección 6
    const observerOptionsTitle = { 
        root: null, 
        threshold: 0.1 // Se activa cuando el 10% del título es visible
    };

    const animateOnScrollTitle = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const observerTitle = new IntersectionObserver(animateOnScrollTitle, observerOptionsTitle);
    const title = document.querySelector(".sec6 h2");
    observerTitle.observe(title);

    // Animación para el formulario y la imagen
    const observerOptionsFormImage = {
        root: null,
        threshold: 0.1
    };

    const animateOnScrollFormImage = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;

                if (target.classList.contains("col-md-6")) {
                    if (target.querySelector("form")) {
                        target.classList.add("formulario-slideInLeft");
                    } else if (target.querySelector("img")) {
                        target.classList.add("imagen-slideInRight");
                    }
                }

                observer.unobserve(entry.target);
            }
        });
    };

    const observerFormImage = new IntersectionObserver(animateOnScrollFormImage, observerOptionsFormImage);
    const formAndImage = document.querySelectorAll(".sec6 .col-md-6");

    formAndImage.forEach((el) => observerFormImage.observe(el));
});
