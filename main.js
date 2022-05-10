const topMenu = document.getElementById('menu');
const topMenuIcon = document.getElementById('menu-icon');

document.addEventListener('click', (e) => {
    if (topMenuIcon.contains(e.target)) {
        topMenu.classList.add('menu-expanded')
        topMenu.classList.toggle('hidden')
    } else {
        if (topMenu.classList.contains('menu-expanded')) {
            topMenu.classList.remove('menu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})