function showCategory(categoryId) {
    // Az összes kategória elrejtése
    var categories = document.getElementsByClassName('category');
    for (var i = 0; i < categories.length; i++) {
        categories[i].style.display = 'none';
    }
    // A kiválasztott kategória megjelenítése
    document.getElementById(categoryId).style.display = 'block';
    
    // Az összes kategória link normál stílusának visszaállítása
    var links = document.querySelectorAll('.sidebar a');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('selected-category');
    }
    
    // A kiválasztott kategória linkjének vastag stílus beállítása
    var selectedLink = document.querySelector('.sidebar a[href="#"][onclick="showCategory(\'' + categoryId + '\')"]');
    if (selectedLink) {
        selectedLink.classList.add('selected-category');
    }
}

function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    if (answer.classList.contains('expanded')) {
        answer.classList.remove('expanded');
    } else {
        answer.classList.add('expanded');
    }
}