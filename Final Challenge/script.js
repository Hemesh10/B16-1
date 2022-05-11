gsap.to(".box h1", {
    y:"0%",
    stagger:1,
    duration:1,
    ease:Expo.easeInOut,
    opacity:1
})

$(".box h1").textillate({ in: { effect: 'fadeInUp' } });

/* gsap.to("#main", {
    y:"-50%",
    delay:4,
    duration:2,
    ease:Expo.easeInOut
}) */

gsap.to(".ttxt h1", {
    y:"0%",
    stagger:.5,
    opacity:1,
    duration:1,
    delay:5,
    ease:Expo.easeInOut
})
gsap.from("#imagebox", {
    height:"0px",
    duration:1.5,
    delay:6,
    ease:Expo.easeInOut
})

gsap.to("#nav", {
    y:"0%",
    delay:6,
    duration:1.5,
    ease:Expo.easeInOut,
    opacity:1    
})

