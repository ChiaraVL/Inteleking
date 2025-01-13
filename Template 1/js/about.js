document.addEventListener("DOMContentLoaded", () => {

    // Obtener los elementos
    const image = document.querySelector(".transform-img");
    const p1 = document.querySelector(".p1");
    const countersSection = document.querySelector(".counters"); // Seleccionamos la sección completa de los contadores
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

    // Función que maneja la animación en el scroll
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Iniciar la animación de los contadores
                animateCounters();

                // Añadir las clases de animación a la imagen y al contenedor p1
                image.classList.add('zoom-img');
                p1.classList.add('slide-left');

                // Añadir la clase de deslizamiento hacia la derecha a la sección completa de los contadores
                countersSection.classList.add('slide-right');

                // Dejar de observar después de la animación
                observer.unobserve(entry.target);
            }
        });
    };

    // Crear un observador de intersección
    const observer = new IntersectionObserver(animateOnScroll, {
        root: null,
        threshold: 0.1 // Activar cuando al menos el 10% del elemento es visible
    });

    // Seleccionar la sección 2 para observarla
    const targetSection = document.querySelector('.sec2');
    observer.observe(targetSection); // Observar la sección 2

});
