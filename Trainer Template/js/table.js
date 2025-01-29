document.querySelectorAll('.schedule-nav li a').forEach(button => {
    button.addEventListener('click', function() {
        // Quitar la clase 'active' de todos los botones
        document.querySelectorAll('.schedule-nav li a').forEach(btn => btn.classList.remove('active'));
        // Agregar la clase 'active' al botón seleccionado
        this.classList.add('active');

        // Remover resalte previo en la tabla
        document.querySelectorAll('table td').forEach(cell => {
            cell.classList.remove('highlight');
        });

        // Obtener el ID del botón y convertirlo a mayúsculas
        const id = this.id.toUpperCase();

        // Si es "ALL", no aplicar filtro
        if (id === 'ALL') return;

        // Resaltar celdas relacionadas
        document.querySelectorAll(`table td.${id}`).forEach(cell => {
            cell.classList.add('highlight');
        });
    });
});