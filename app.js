var sec = 0
var msec = 0
var min =0
var minheading = document.getElementById('min')
var secheading = document.getElementById('sec')
var msecheading = document.getElementById('msec')
var interval;
var btn;
var x = document.getElementById('aud') 



function timer(){
       msec++
       msecheading.innerHTML="." + msec

    if(msec >=100){
        sec++;
        msec=0
        if(sec<=9){ 
       secheading.innerHTML= "0" + sec}
       else if(sec>9){ 
        secheading.innerHTML= sec}
       
    }
    else if(sec >= 60){
        min++
        sec=0
        if(min<=9){    
        minheading.innerHTML="0" + min}
        else if(min>9){ 
            minheading.innerHTML= min}
    }
}



function start(){
    interval = setInterval(timer,10)
     document.getElementById('str').disabled=true;
     document.getElementById("circulate").style.animation='circle 1s linear infinite'
     ply()
     

}
function stop(){
    clearInterval(interval)
    document.getElementById('str').disabled=false;
    document.getElementById("circulate").style.animation='none'
    
    

}
function reset(){
    min=0
    sec=0
    msec=0
    Lap=0
    minheading.innerHTML=min
    secheading.innerHTML=sec
    msecheading.innerHTML=msec
    Laps.innerHTML =Lap
    stop()
    
}
var Lap = document.getElementById('lap');
var Laps = document.getElementById('laps');

Lap.onclick = function() {
    Laps.innerHTML += "<li>" + minheading.innerHTML + ":" + secheading.innerHTML  +   "" +msecheading.innerHTML + "</li>";
  }

x.onplay()