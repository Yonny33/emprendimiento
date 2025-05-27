// ==========================================================================
// ===  FUNCIONALIDAD DEL MENÚ RESPONSIVE  ===
// ==========================================================================

// Obtener elementos del DOM para el menú
const menu = document.getElementById('menu');
const toggleOpen = document.getElementById('toggle_open');
const toggleClose = document.getElementById('toggle_close');

// Verificar que los elementos del menú existen antes de añadir escuchadores
if (menu && toggleOpen && toggleClose) {
    // Agregar eventos a los botones de apertura y cierre
    toggleOpen.addEventListener('click', toggleMenu);
    toggleClose.addEventListener('click', toggleMenu);

    function toggleMenu() {
        // Alternar la clase para mostrar/ocultar el menú
        menu.classList.toggle('show-menu');

        // Verificar si el menú está abierto
        const isMenuOpen = menu.classList.contains('show-menu');

        // Controlar la visibilidad de los iconos de apertura/cierre
        toggleOpen.style.display = isMenuOpen ? 'none' : 'block';
        toggleClose.style.display = isMenuOpen ? 'block' : 'none';

        // Mejorar accesibilidad: actualizar el atributo aria-expanded
        toggleOpen.setAttribute('aria-expanded', isMenuOpen);
        toggleClose.setAttribute('aria-expanded', isMenuOpen);
    }
} else {
    console.warn("Algunos elementos del menú (ID: menu, toggle_open, toggle_close) no se encontraron en el DOM.");
}


// ==========================================================================
// ===  FUNCIONALIDAD DEL CATÁLOGO DE DISEÑOS (FILTRADO)  ===
// ==========================================================================

// Asegurarse de que el DOM esté completamente cargado antes de ejecutar el script de filtrado
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los botones de filtro y las tarjetas de diseño
    const filterButtons = document.querySelectorAll('.filter-btn');
    const designCards = document.querySelectorAll('.design-card');

    // Verificar si hay botones de filtro y tarjetas de diseño para evitar errores
    if (filterButtons.length === 0 && designCards.length === 0) {
        // console.log("No se encontraron botones de filtro o tarjetas de diseño en esta página. La funcionalidad de filtrado no se activará.");
        return; // Salir de la función si no hay elementos relevantes
    }

    // Añadir un escuchador de eventos a cada botón de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Eliminar la clase 'active' de todos los botones de filtro
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // 2. Añadir la clase 'active' al botón que fue clickeado
            button.classList.add('active');

            // 3. Obtener la categoría del botón clickeado (del atributo data-category)
            const category = button.dataset.category;

            // 4. Iterar sobre todas las tarjetas de diseño
            designCards.forEach(card => {
                const cardCategory = card.dataset.category; // Obtener la categoría de la tarjeta

                // Si la categoría es 'all' (mostrar todo) o la categoría de la tarjeta
                // coincide con la categoría seleccionada, mostrar la tarjeta.
                // De lo contrario, ocultarla.
                if (category === 'all' || cardCategory === category) {
                    card.classList.remove('hidden'); // Remover la clase 'hidden'
                    // Opcional: Si quieres una transición más elaborada al mostrar,
                    // puedes añadir un pequeño retraso o usar otras clases/estilos aquí.
                    // card.style.opacity = '1';
                    // card.style.transform = 'scale(1)';
                } else {
                    card.classList.add('hidden'); // Añadir la clase 'hidden'
                    // Opcional: Si quieres una transición de desaparición suave
                    // card.style.opacity = '0';
                    // card.style.transform = 'scale(0.8)';
                }
            });
        });
    });
});