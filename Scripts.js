const theTimer = document.querySelector(".timer");
const textArea = document.querySelector("#text-area");

var timer = [0,0,0,0];

function leadingZero(time){
    if(time <= 9){
        time = "0" + time;
    }
    return time;
}

function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;

    timer[3]++;
    timer[0] = Math.floor((timer[3] / 100) /60);
    timer[1] = Math.floor(timer[3]/100) - (timer[0] * 60);
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

function Start(){
    let textEnteredLength = textArea.value.length;

    if (textEnteredLength == 0) {
        setInterval(runTimer, 10);
    }
}

textArea.addEventListener("keypress", Start);