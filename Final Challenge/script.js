gsap.from(".box h1", {
    y:"85%",
    stagger:2,
    duration:2,
    ease:Back.easeInOut,
    opacity:0
});

gsap.to(".box h1", {
    delay:2,
    y:"-85%",
    stagger:2,
    duration:2,
    ease:Expo.easeInOut,
    opacity:0
});

gsap.to("#main", {
    y:"-50%",
    delay:8,
    duration:2,
    ease:Expo.easeInOut
});

gsap.to(".ttxt h1", {
    y:"0%",
    stagger:.5,
    opacity:1,
    duration:1,
    delay:10,
    ease:Expo.easeInOut
});

$(".ttxt h1").textillate({ in: { effect: 'fadeInUp' } });

gsap.from("#imagebox", {
    height:"0px",
    duration:1.5,
    delay:11,
    ease:Expo.easeInOut
})

gsap.to("#nav", {
    y:"0%",
    delay:11,
    duration:1.5,
    ease:Expo.easeInOut,
    opacity:1    
})

