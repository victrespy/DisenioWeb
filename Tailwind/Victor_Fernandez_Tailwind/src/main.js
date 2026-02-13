// Selección de elementos
const menuBtn = document.querySelector('button.md\\:hidden'); // El botón hamburguesa
const navMenu = document.querySelector('header ul'); // El contenedor de la lista de enlaces

// Función para alternar el menú
menuBtn.addEventListener('click', () => {
    // Cambiamos entre 'hidden' (estado inicial) y un estilo de menú móvil
    navMenu.classList.toggle('hidden');
    
    // Añadimos clases para que se vea bien en móvil cuando se despliegue
    navMenu.classList.toggle('flex');
    navMenu.classList.toggle('flex-col');
    navMenu.classList.toggle('absolute');
    navMenu.classList.toggle('top-20');
    navMenu.classList.toggle('left-0');
    navMenu.classList.toggle('w-full');
    navMenu.classList.toggle('bg-pure-black');
    navMenu.classList.toggle('p-6');
    navMenu.classList.toggle('space-y-6');
    navMenu.classList.toggle('space-x-0'); // Quitamos el espacio horizontal de escritorio
    navMenu.classList.toggle('border-b');
    navMenu.classList.toggle('border-white/10');
});

// Cerrar el menú automáticamente al hacer clic en un enlace (para SPA feel)
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (!navMenu.classList.contains('hidden')) {
            menuBtn.click(); // Disparamos el click para revertir los cambios
        }
    });
});