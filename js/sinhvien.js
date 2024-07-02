function toggleMenu(element) {
    const menuItem = element.parentElement;
    const menu = menuItem.querySelector('.menu');
    const arrow = element.querySelector('.arrow');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    } else {
        menu.style.display = 'block';
        arrow.style.transform = 'rotate(90deg)';
    }
}