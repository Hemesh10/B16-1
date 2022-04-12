document.querySelector("#button").addEventListener("click",function(){
    var time = 60;
    var score =0;
    function timedisplay(){
    
       var j = setInterval(() => {
           if(time === 0){
               clearInterval(j);
               document.querySelector("#btm").innerHTML = `<h1>GAME OVER</h1>`
           }
           document.querySelector("#meta2").textContent = time;
           time--;
       }, 1000);
    }
    
    function allbubbles(){
    var clutter ="";
    for(var i = 0; i<75; i++){
        rn = Math.floor(Math.random()*10) 
    clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#btm").innerHTML = clutter
    }
    function randomhit(){
        rn2 = Math.floor(Math.random()*10);
        document.querySelector("#meta3").textContent =rn2;
    }
    
    function scorecard(){ 
        document.querySelector("#btm").addEventListener("click",function(dets){
            document.querySelector("#meta").textContent =score;
            if(dets.target.textContent === document.querySelector("#meta3").textContent){
                document.querySelector("#meta").textContent = Number(score+=10);
                randomhit();
                allbubbles();
            }
            else{
                if(score !== 0){
                document.querySelector("#meta").textContent = Number(score-=5);
                }
            }
        })
    }
    randomhit()
    allbubbles()
    timedisplay()
    scorecard()
    })