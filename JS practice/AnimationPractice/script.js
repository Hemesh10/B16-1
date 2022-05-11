gsap.to("#box",{
    scrollTrigger:{
        trigger:"#secondmain",
        start:"5% 50%",
        end:"30% 50%",
        scrub: 5,
        markers:true
    },
    y: "50vw",
    rotate:360,
    duration:5,    
})