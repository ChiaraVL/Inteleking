document.addEventListener("DOMContentLoaded", () => {
    // --------------------------------
    // Animación de los contadores
    // --------------------------------
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

    // Observador para animar los contadores cuando la sección con contadores entra en vista
    const observerOptions = {
        root: null,
        threshold: 0.1 // Se activa cuando el 10% del contenedor es visible
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters(); // Iniciar la animación de los contadores
                observer.unobserve(entry.target); // Dejar de observar después de la animación
            }
        });
    };

    // Observar la sección de los contadores
    const observer = new IntersectionObserver(animateOnScroll, observerOptions);
    observer.observe(document.querySelector(".sec5")); // Observar la sección con contadores

    const goalItems = document.querySelectorAll('.goal-item');

    // Agrega un evento de clic a cada elemento
    goalItems.forEach(item => {
        item.addEventListener('click', () => {
        // Remueve la clase 'active' de todos los elementos
        goalItems.forEach(i => i.classList.remove('active'));
        
        // Agrega la clase 'active' al elemento seleccionado
        item.classList.add('active');
        });
    });
});
