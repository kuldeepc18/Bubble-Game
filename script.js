let timer = 60;
let score = 0;
let hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score
}

function getNewHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble() {
    let clutter = "";

    for (let i = 1; i < 115; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function() {
        if(timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!</h1>`
        }
    }, 1000)
}

document.querySelector("#pbtm").addEventListener("click", function(e) {
    let clickednum = Number(e.target.textContent);
    if(clickednum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
    }
});

getNewHit();
runTimer();
makeBubble();