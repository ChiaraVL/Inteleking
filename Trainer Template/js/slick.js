$(document).ready(function(){
    // Inicializa el slider Slick con las configuraciones adecuadas
    $('.slick-slider').slick({
        slidesToShow: 2,       // Muestra 2 elementos al mismo tiempo
        slidesToScroll: 1,     // Avanza de 1 en 1
        autoplay: true,        // Hacerlo automático (opcional)
        autoplaySpeed: 2000,   // Velocidad del auto scroll (opcional)
        dots: true,            // Mostrar puntos de navegación (opcional)
        arrows: true,          // Mostrar flechas de navegación (opcional)
        infinite: true         // Hacer el carrusel infinito
    });
});
