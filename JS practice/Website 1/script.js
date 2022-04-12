window.addEventListener("mousemove",function(dets){
    document.querySelector("#pointer").style.top = `${dets.clientY}px`;
    document.querySelector("#pointer").style.left = `${dets.clientX}px`;
})


gsap.to(".ttxt h1",{
    stagger:.3,
    y:-20,
    ease: Expo.easeInOut,
    opacity: 1,
    duration: 2
})

document.querySelectorAll(".Enlarge , .box")
.forEach(function(elem){
    elem.addEventListener("mousemove",function(){
        document.querySelector("#pointer").style.width = "60px" ;
        document.querySelector("#pointer").style.height = "60px";
    })
    elem.addEventListener("mouseleave",function(){
        document.querySelector("#pointer").style.width = "15px" ;
        document.querySelector("#pointer").style.height = "15px" ;
    })
})

/* $('.ttxt h1 ').textillate({ in: { effect: 'fadeInUp' } });  */

document.querySelector("#image1").addEventListener("mousemove",function(){
    document.querySelector("#main").style.backgroundColor = "rgb(255, 88, 88)" ;
});
document.querySelector("#image1").addEventListener("mouseleave",function(){
    document.querySelector("#main").style.backgroundColor = "initial" ;
});

document.querySelector("#image2").addEventListener("mousemove",function(){
    document.querySelector("#main").style.backgroundColor = "rgb(255, 130, 62)" ;
});
document.querySelector("#image2").addEventListener("mouseleave",function(){
    document.querySelector("#main").style.backgroundColor = "initial" ;
});

document.querySelector("#image3").addEventListener("mousemove",function(){
    document.querySelector("#main").style.backgroundColor = "rgb(100, 135, 240)";
});
document.querySelector("#image3").addEventListener("mouseleave",function(){
    document.querySelector("#main").style.backgroundColor = "initial" ;
});

document.querySelector("#image4").addEventListener("mousemove",function(){
    document.querySelector("#main").style.backgroundColor = "rgb(255, 216, 168)" ;
});
document.querySelector("#image4").addEventListener("mouseleave",function(){
    document.querySelector("#main").style.backgroundColor = "initial" ;
});

document.querySelectorAll(".image")
.forEach(function(elem){
    elem.addEventListener("mousemove",function(dets){
        document.querySelector("#pointer").style.display = "none";
        document.querySelector("#svgdiv").style.visibility = "visible"
        document.querySelector("#svgdiv").style.top = `${dets.clientY}px`;
        document.querySelector("#svgdiv").style.left = `${dets.clientX}px`;
    })
    elem.addEventListener("mouseleave",function(dets){
        document.querySelector("#pointer").style.display = "initial";
        document.querySelector("#svgdiv").style.visibility = "hidden";

    })
})
