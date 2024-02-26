let rowContainer = document.querySelector('.container')
let stopBtn = document.getElementById('stop-button')
let playBtn = document.getElementById('play-button')
let resetBtn = document.getElementById('reset-button')

let boxesTag = document.querySelectorAll('.col-1')//[]
console.log(boxesTag);
let new_interval;
let count=0;
let bgChange = () => {
    if (count==44) {
        count = 0
        boxesTag.forEach((ele,i)=>{
            boxesTag[i].style.backgroundColor =`rgb(${Math.trunc(Math.random()*255)},${Math.trunc(Math.random()*255)},${Math.trunc(Math.random()*255)})`
        })
    } else {
        boxesTag.forEach((ele, i) => {
            if (count == i) {
                boxesTag[i].style.backgroundColor =`rgb(${Math.trunc(Math.random()*255)},${Math.trunc(Math.random()*255)},${Math.trunc(Math.random()*255)})`

            }
        })
        count++;
    }
    console.log(count);

}
// playBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     if (!new_interval) {

//         new_interval = setInterval(bgChange, 300)
//     }
// })
//     console.log(boxesTag);
//     stopBtn.addEventListener('click', () => {
//         if (new_interval) {

//             clearInterval(new_interval)
//             new_interval = undefined
//         }
//     })
// resetBtn.addEventListener('click',()=>{
//     count=0
//     boxesTag.forEach((ele,i)=>{
//         boxesTag[i].style.backgroundColor = 'white'
        
//     })
// })
rowContainer.addEventListener('click',(e)=>{
    e.preventDefault();
    let row_id=e.target.id;
    if(row_id ==='play-button'){
        console.log(row_id);
        if (!new_interval) {

            new_interval = setInterval(bgChange, 300)
        }
    }
        console.log(boxesTag);
    if(row_id ==='reset-button'){
        count=0
        boxesTag.forEach((ele,i)=>{
            boxesTag[i].style.backgroundColor = 'white'
            
        })
    }
    if(row_id ==='stop-button'){
        if (new_interval) {

            clearInterval(new_interval)
            new_interval = undefined
        }
    }
})

