document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter span');

    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            let current = +counter.innerText;
            const increment = target / 100; // Ajusta la velocidad de incremento aquí

            if (current < target) {
                current = Math.ceil(current + increment);
                counter.innerText = current; // Muestra solo el número
                setTimeout(updateCounter, 10); // Ajusta el tiempo entre cada incremento
            } else {
                counter.innerText = target + "K"; // Asegura que el número final sea el target
            }
        };

        updateCounter();
    });
});
