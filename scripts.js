function toggleMobileNav() {
    // On récupère le menu et le bouton de toggle
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');

    // On ajoute ou on retire la classe 'active' à chaque clic
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Optionnel : Fermer le menu quand on clique sur un lien (pour mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});
