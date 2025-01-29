// Seleccionar elementos
const overlay = document.querySelector('.overlay');
const offcanvasMenu = document.querySelector('.offcanvas-menu');
const closeOffcanvas = document.querySelector('.close-offcanvas');
const menuButton = document.querySelector('.menu-btn'); // Asegúrate de tener un botón para abrir el menú

// Mostrar el menú
menuButton.addEventListener('click', () => {
  offcanvasMenu.classList.add('active');
  overlay.classList.add('active');
});

// Cerrar el menú
closeOffcanvas.addEventListener('click', () => {
  offcanvasMenu.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  offcanvasMenu.classList.remove('active');
  overlay.classList.remove('active');
});
