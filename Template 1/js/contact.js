// Inicialización del mapa
var map = L.map('map').setView([4.6541, -74.0851], 13);

// Cargar las tiles de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Agregar un marcador
var marker = L.marker([4.6541, -74.0851]).addTo(map);

// Popup con información
marker.bindPopup("Here we are!").openPopup();