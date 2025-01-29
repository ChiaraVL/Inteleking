document.addEventListener('DOMContentLoaded', function () {
    const popup3 = document.getElementById('contact-popup');
    const closeButton3 = document.querySelector('.popup-close');
    const openButtons3 = document.querySelectorAll('.def-btn-8, li a[href="#Contact"]'); // Botón y enlace de "Contact"

    // Abrir el pop-up al hacer clic en el botón o en el enlace
    openButtons3.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            popup3.style.display = 'flex';
        });
    });

    // Cerrar el pop-up al hacer clic en el botón de cierre
    closeButton3.addEventListener('click', function () {
        popup3.style.display = 'none';
    });

    // Cerrar el pop-up al hacer clic fuera del contenido
    popup.addEventListener('click', function (event) {
        if (event.target === popup3) {
            popup3.style.display = 'none';
        }
    });
});
