document.querySelector("#button"),addEventListener("click",function(){
    score = 0;
    timer = 59;
    function allBubbles() {
        var clutter = "";
        for (var i = 0; i < 126; i++) {
            random = Math.floor(Math.random() * 10);
            clutter += `<div class="bubbles">${random}</div>`
        }
        document.querySelector("#bottom").innerHTML = clutter;
    }

    function randomHit() {
        random2 = Math.floor(Math.random() * 10);
        document.querySelector("#randomhit").textContent = random2;
    }

    function setTimer() {
        var j = setInterval(() => {
            if (timer <= 0) {
                clearInterval(j);
                document.querySelector("#bottom").innerHTML = `<h1>Game Over Dude</h1>`
            }
            document.querySelector("#timing").textContent = timer;
            timer--;
        }, 1000);
    }

    function scoreCard() {
        document.querySelector("#bottom").addEventListener("click", function (dets) {
            document.querySelector("#gamescore").textContent = score;
            if (dets.target.textContent === document.querySelector("#randomhit").textContent) {
                document.querySelector("#gamescore").textContent = Number(score += 5);
                randomHit();
                allBubbles();
            }
            else if (score !== 0) {
                document.querySelector("#gamescore").textContent = Number(score -= 5);
            }
        })
    }


    allBubbles()
    randomHit()
    setTimer()
    scoreCard()
})