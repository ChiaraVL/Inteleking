document.addEventListener('DOMContentLoaded', function () {
    const imageTriggers = document.querySelectorAll('.image-popup-trigger img'); // Seleccionar todas las imágenes
    const popup2 = document.getElementById('image-popup');
    const popupImage = document.getElementById('popup-image');
    const closeButton2 = document.querySelector('.image-popup-close');

    // Abrir el pop-up al hacer clic en cualquier imagen con la clase .image-popup-trigger
    imageTriggers.forEach(image => {
        image.addEventListener('click', function () {
            const imageUrl = this.src; // Obtener la URL de la imagen clicada
            popupImage.src = imageUrl; // Asignar la imagen al pop-up
            popup2.style.display = 'flex'; // Mostrar el pop-up
        });
    });

    // Cerrar el pop-up al hacer clic en el botón de cierre
    closeButton2.addEventListener('click', function () {
        popup2.style.display = 'none'; // Ocultar el pop-up
    });

    // Cerrar el pop-up al hacer clic fuera de la imagen dentro del pop-up
    popup2.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup2.style.display = 'none'; // Ocultar el pop-up
        }
    });
});
