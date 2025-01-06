const theTimer = document.querySelector(".timer");
const textArea = document.querySelector("#text-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");

var timer = [0,0,0,0];
var timeRuning = false;
var interval;

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

function spellCheck() {
    let textEntered = textArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);

    if(textEntered == originText){
        textArea.style.borderColor = "#55efc4";
        clearInterval(interval);
        alert("speed test over!");
    }else{
        if (textEntered == originTextMatch) {
        textArea.style.borderColor = "#ffeaa7";

        }else{
        textArea.style.borderColor = "#e17055";
        }
    }
}

function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timeRuning = false;

    textArea.value = "";
    theTimer.innerHTML = "00:00:00";
    textArea.style.borderColor = "#2d3436";
}

function Start(){
    let textEnteredLength = textArea.value.length;

    if (textEnteredLength == 0 && !timeRuning) {
        timeRuning = true;
        interval = setInterval(runTimer, 10);
    }
}

textArea.addEventListener("keypress", Start);
textArea.addEventListener("keyup", spellCheck);
resetButton.addEventListener("click", reset);