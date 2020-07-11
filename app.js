var minutes=0;
var seconds=0;
var mseconds=0;
var minutesget=document.getElementById("min");
var secondsget=document.getElementById("sec");
var msecondsget=document.getElementById("msec");
var interval;
function timer(){
    mseconds=mseconds+1
    msecondsget.innerHTML=mseconds
    if (mseconds >=100){
        seconds=seconds+1
    secondsget.innerHTML=seconds
    mseconds=0;
    }
    else if (seconds >=60){
        minutes=minutes+1
    minutes.innerHTML=minutes
    seconds=0;
    }
}
function start(){
    clearInterval(interval);
    interval=setInterval(timer,10)
}

function stop(){
    clearInterval(interval)
   
}
function reset(){
    minutes=00
    seconds=00 
    mseconds=00;
    minutesget.innerHTML=minutes
    secondsget.innerHTML=seconds
    msecondsget.innerHTML=mseconds
    stop()
}