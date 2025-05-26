// Obtener elementos del DOM
const menu = document.getElementById('menu');
const toggleOpen = document.getElementById('toggle_open');
const toggleClose = document.getElementById('toggle_close');

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