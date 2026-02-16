
const menuBtn = document.querySelector('button.md\\:hidden');
const navMenu = document.querySelector('header ul');

// Menu hambuerguesa
menuBtn.addEventListener('click', () => {
    
    navMenu.classList.toggle('hidden');
   
    navMenu.classList.toggle('flex');
    navMenu.classList.toggle('flex-col');
    navMenu.classList.toggle('absolute');
    navMenu.classList.toggle('top-20');
    navMenu.classList.toggle('left-0');
    navMenu.classList.toggle('w-full');
    navMenu.classList.toggle('bg-pure-black');
    navMenu.classList.toggle('p-6');
    navMenu.classList.toggle('space-y-6');
    navMenu.classList.toggle('space-x-0');
    navMenu.classList.toggle('border-b');
    navMenu.classList.toggle('border-white/10');
});


navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (!navMenu.classList.contains('hidden')) {
            menuBtn.click();
        }
    });
});