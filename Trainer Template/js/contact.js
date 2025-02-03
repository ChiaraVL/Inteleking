document.addEventListener('DOMContentLoaded', function () {
    const popup3 = document.getElementById('contact-popup');
    const closeButton3 = document.querySelector('.popup-close');
    const openButtons3 = document.querySelectorAll('.def-btn-8, li a[href="#Contact"], #Contact2'); // Agregamos #Contact2
    const contactForm = document.getElementById('contact-form');

    // Asegurar que el pop-up esté oculto al cargar la página
    popup3.style.display = 'none';

    // Abrir el pop-up al hacer clic en los botones o enlaces
    openButtons3.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            popup3.style.display = 'flex';
            localStorage.setItem('popupOpened', 'true');
        });
    });

    // Cerrar el pop-up al hacer clic en el botón de cierre
    closeButton3.addEventListener('click', function () {
        popup3.style.display = 'none';
        localStorage.removeItem('popupOpened');
    });

    // Cerrar el pop-up al hacer clic fuera del contenido
    popup3.addEventListener('click', function (event) {
        if (event.target === popup3) {
            popup3.style.display = 'none';
            localStorage.removeItem('popupOpened');
        }
    });

    // Evitar la recarga de la página al enviar el formulario
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Formulario enviado correctamente');
        popup3.style.display = 'none';
        localStorage.removeItem('popupOpened');
    });

    // Asegurar que el pop-up no se abra automáticamente al recargar la página
    localStorage.removeItem('popupOpened');
});
