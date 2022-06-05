const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".category-headline",
    },
  });

  tl.from(".category-headline h2", { x: -80, opacity: 0, duration: 1 })
    .from(".category-headline p", { y: 50, opacity: 0, duration: 1 }, "-=0.5")
    .from(".featured-2", { y: 50, opacity: 0, duration: 1 },)
    .from(".row-1", { y: 50, opacity: 0, duration: 1 }, )
const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".blog-title-1",
      start: "top center"
    },
  });

  t2.from(".blog-title-1", { x: -80, opacity: 0, duration: 1.1 })
    .from(".blog-item-1", { y: 50, opacity: 0, duration: 1 }, "-=0.5")

const t3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".blog-title-2",
          start: "top center"
        },
      });
    
      t3.from(".blog-title-2", { x: -80, opacity: 0, duration: 1.1 })
        .from(".category-item-1", { x: 80, opacity: 0, duration: 1.1 })
        .from(".category-item-2", { x: 80, opacity: 0, duration: 1.1 }, "-=0.25")
        .from(".category-item-3", { x: 80, opacity: 0, duration: 1.1 }, "-=0.5")
        .from(".category-item-4", { x: 80, opacity: 0, duration: 1.1 }, "-=0.75")
        .from(".blog-item-2", { y: 50, opacity: 0, duration: 1 }, "-=0.5")
const t4 = gsap.timeline({
            scrollTrigger: {
              trigger: ".blog-title-3",
              start: "top center"
            },
          });
        
          t4.from(".blog-title-3", { x: -80, opacity: 0, duration: 1.1 })
            .from(".category-item-1-1", { x: 80, opacity: 0, duration: 1.1 })
            .from(".category-item-2-2", { x: 80, opacity: 0, duration: 1.1 }, "-=0.25")
            .from(".category-item-3-3", { x: 80, opacity: 0, duration: 1.1 }, "-=0.5")
            .from(".blog-item-3", { y: 50, opacity: 0, duration: 1 }, "-=0.5")
   