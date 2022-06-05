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




const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".slider",
      start: "top center",
    },
  });

  tl.from(".text-heading", { x: -80, opacity: 0, duration: 1.1 })
    .from(".text-1", { y: 50, opacity: 0, duration: 1 }, "-=0.5")
    .from(".text-2", { y: 20, opacity: 0, duration: 1 }, "-=0.4")
   
    .from(
      ".text-content button",
      { y: 80, opacity: 0, duration: 1.2 },
      "-=0.5"
    );

const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".featured-1",
        //   start: "top center",
        },
      });
    
      t2.from(".featured-1", { y: 50, opacity: 0, duration: 1 })
const t3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".product-position",
        //   start: "top center",
        },
      });
    
      t3.from(".product-img", { y: 50, opacity: 0, duration: 1 }, "-=1")
const t4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".featured-2",
        //   start: "top center",
        },
      });
    
      t4.from(".featured-2", { y: 50, opacity: 0, duration: 1 })