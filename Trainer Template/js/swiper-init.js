document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        // Configuración de Swiper
        slidesPerView: 1, // En pantallas pequeñas, solo una imagen
                spaceBetween: 10, // Espacio entre las imágenes
                centeredSlides: false, // Asegura que la imagen esté centrada
                navigation: false, // Desactiva la navegación en pantallas pequeñas
                autoplay: {
                    delay: 3000, // Tiempo de retraso en milisegundos (1 segundo)
                    disableOnInteraction: false, // Mantiene autoplay activo
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: true, // Asegura que las imágenes estén centradas
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay: {
                    delay: 3000, // Tiempo de retraso en milisegundos (3 segundos)
                    disableOnInteraction: false, // Mantiene autoplay activo incluso si el usuario interactúa
                },
            },
        }
    });
});
