var bubbles = document.querySelector("#bubbles") ;

bubbles.addEventListener("click",function(details){
    if(details.target.classList[0] === "bubble"){
        console.log("Clicked !") ;
    }
});