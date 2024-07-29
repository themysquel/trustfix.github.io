const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownButton = document.querySelector('.dropdown-btn');
const mobilMenuCloseBtn = document.querySelector('.mobil-menu-close-btn');
const body = document.body; //Body lekérése ,hogy le tudjuk tiltani a scrollt

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        const websiteLoader = document.getElementById('website-loader');
        const hero = this.document.getElementById('hero');
        websiteLoader.style.display = "none";
        hero.style.display = "flex";
        hero.classList.add('hero-animation');
    });
});

toggleButton.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    mobilMenuCloseBtn.classList.toggle('active');
    body.classList.add('no-scroll');
    const isOpen = toggleButton.classList.toggle('active'); // Ha megvan nyitva a mobil menü akkor letiltja a scrollt
});

mobilMenuCloseBtn.addEventListener('click', function() {
    navLinks.classList.remove('active');
    mobilMenuCloseBtn.classList.remove('active');
    body.classList.remove('no-scroll'); //Ha bezárod a mobil menüt akkor újra lehet scrollolni
});

dropdownButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show');
});
// Bezárjuk a menüt, ha a felhasználó kattint a dokumentum más részére vagy a toggle iconra
document.addEventListener('click', function(event) {
    const target = event.target;
    if (!target.closest('.navbar') && !target.classList.contains('menu-toggle')) {
        navLinks.classList.remove('active');
    }
});  






