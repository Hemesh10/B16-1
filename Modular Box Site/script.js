/* 
var flag = 0 ;

document.querySelector("#main-menu").addEventListener("click",function() {
    if(flag === 0){
        document.querySelector("#onclick-nav").style.top = "10%";
        flag = 1;
    }
    else{
        document.querySelector("#onclick-nav").style.top = "-20vh";
        flag = 0;
    }
}); */


/* var flag = 0 ;

document.querySelector(".box").addEventListener("click",function() {
    if(flag === 0){
        document.querySelector(".details").style = "transform:translateX(0vw)";
        flag = 1;
    }
    else{
        document.querySelector(".details").style = "transform:translateX(-30vw)";
        flag = 0;
    }
}); */

var flag = 0 ;

document.querySelectorAll(".box")
.forEach(function(elem){
    elem.addEventListener("click",function(){
        if(flag === 0){
            document.querySelectorAll(".details").forEach(function(element){
                element.style = "transform:translateX(0vw)";
                flag=1;
            })
        }
        else{
            document.querySelectorAll(".details").forEach(function(element){
                element.style = "transform:translateX(-30vw)";
                flag=0;
            })
        }

    })
})