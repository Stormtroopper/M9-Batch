let playBtn = document.getElementById('play-button')
let resetBtn = document.getElementById('reset-button')
let stopBtn = document.getElementById('stop-button')
let watchTag = document.getElementById('stop-content')
let lapcount = document.getElementById('laps')
let ms = 0
let s = 0
let m = 0
let count = 0;
let new_interval_1;
let setTime = () => {
    ms++;
    if (ms >= 100) {
        s++;
        ms = 0;
    }
    if (s === 60) {
        m++;

    }
    if (m === 60) {
        ms = s = m = 0;
    }
    let milli = ms < 10 ? `0${ms}` : ms;
    let seconds = s < 10 ? `0${s}` : s;
    let minute = m < 10 ? `0${m}` : m;
    watchTag.innerText = `${minute}:${seconds}:${milli}`;
}
let countLap = () => {
    count++;
    lapcount.innerHTML = `Laps:${count}<br>`;
    console.log(lapcount.innerHTML);
}
playBtn.addEventListener('click', () => {
if(!new_interval_1){

    new_interval_1=setInterval(setTime, 10)
}
})
resetBtn.addEventListener('click', () => {
   if(new_interval_1){

       clearInterval(setTime)
       ms = m = s = 0;
       watchTag.innerText = "00:00.00";
       countLap()
   }else{
    clearInterval(setTime)
    ms = m = s = 0;
    watchTag.innerText = "00:00.00";
   }

})
stopBtn.addEventListener('click', () => {
    if (new_interval_1) {

        clearInterval(new_interval_1)
        new_interval_1 = undefined
    }
    else{
        new_interval_1=setInterval(setTime, 10)
    }
})