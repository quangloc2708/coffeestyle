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

const a = document.querySelector.bind(document);
const aa = document.querySelectorAll.bind(document);

const tabs = aa('.header-nav-item');

tabs.forEach((tab) => {
    tab.onclick = function() {
        
        a('.header-nav-item.active').classList.remove('active');

        this.classList.add('active');
    }
})

           