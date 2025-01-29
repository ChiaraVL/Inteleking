// Obtener los elementos
const playButton = document.querySelector('.play-btn');
const popup = document.getElementById('video-popup');
const closeButton = document.querySelector('.video-popup-close');
const iframe = document.getElementById('youtube-iframe');

// Función para abrir el pop-up
playButton.addEventListener('click', function (event) {
    event.preventDefault(); // Evitar comportamiento predeterminado
    const videoId = this.getAttribute('data-video-id');
    const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.src = youtubeUrl; // Configurar la URL del video
    popup.style.display = 'flex'; // Mostrar el pop-up
});

// Función para cerrar el pop-up
closeButton.addEventListener('click', function () {
    popup.style.display = 'none'; // Ocultar el pop-up
    iframe.src = ''; // Detener el video
});

// Cerrar el pop-up al hacer clic fuera del contenido
popup.addEventListener('click', function (event) {
    if (event.target === popup) {
        popup.style.display = 'none'; // Ocultar el pop-up
        iframe.src = ''; // Detener el video
    }
});