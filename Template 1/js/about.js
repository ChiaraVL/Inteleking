document.addEventListener("DOMContentLoaded", () => {
    // --------------------------------
    // Contadores
    // --------------------------------
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

    // Crear un observador de intersección para la sección con los contadores
    const countersSection = document.querySelector(".count");
    const countersObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Iniciar la animación de los contadores
                animateCounters();

                // Dejar de observar la sección después de animar
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1 // Activar cuando al menos el 10% del elemento es visible
    });

    // Observar la sección que contiene los contadores
    countersObserver.observe(countersSection);
});
