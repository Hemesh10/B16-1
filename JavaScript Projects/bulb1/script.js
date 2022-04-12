var btn1 = document.querySelector("#btn1") ;
var btn2 = document.querySelector("#btn2") ;

btn1.addEventListener("click",function(){ 
    btn2.style.backgroundColor = "red" ;
})

btn2.addEventListener("click",function(){
    btn1.style.backgroundColor = "red" ;
})