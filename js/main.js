const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownButton = document.querySelector('.dropdown');

toggleButton.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    console.log('Hello World');
});

dropdownButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show');
    console.log('Hello World');
});
// Bezárjuk a menüt, ha a felhasználó kattint a dokumentum más részére vagy a toggle iconra
document.addEventListener('click', function(event) {
    const target = event.target;
    if (!target.closest('.navbar') && !target.classList.contains('menu-toggle')) {
        navLinks.classList.remove('active');
    }
});  






