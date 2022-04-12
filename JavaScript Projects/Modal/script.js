var modal = document.querySelector("#modal") ;
var button = document.querySelector("#btn") ;

var flag = 0 ;

button.addEventListener("click",function(){
    if(flag === 0){
        modal.style.top = "50%" ; 
        flag = 1 ;
    }
    else{
        modal.style.top = "-100%";
        flag = 0 ;
    }
})

