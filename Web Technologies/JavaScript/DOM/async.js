let rowContainer = document.querySelector('.container')
let stopBtn=document.getElementById('stop-button')
let boxesTag = document.querySelectorAll('.col-1')//[]
console.log(boxesTag);
rowContainer.addEventListener('click', (event) => {
    let row_id = event.target.id;
    console.log(row_id);
    let count;
    let new_interval;
    if (row_id === 'play-button') {
        let i = 0;
        // boxesTag.forEach((e)=>{
        //     e.style.backgroundColor=`rgb(${Math.trunc(Math.random()*255)},${Math.trunc(Math.random()*255)},${Math.trunc(Math.random()*255)})`
        // })
        new_interval = setInterval(() => {
            if (i < boxesTag.length) {
                boxesTag[i].style.backgroundColor = `rgb(${Math.trunc(Math.random() * 255)},${Math.trunc(Math.random() * 255)},${Math.trunc(Math.random() * 255)})`
                i++;
            }
            count=i;
        }, 200)
        console.log(boxesTag);
        stopBtn.addEventListener('click',()=>{
            clearInterval(new_interval)
        })
    }
        // boxesTag[count].style.backgroundColor = `rgb(${Math.trunc(Math.random() * 255)},${Math.trunc(Math.random() * 255)},${Math.trunc(Math.random() * 255)})`
        else if(row_id==='reset-button'){
                
                // if (i < boxesTag.length) {
                    // for(boxes of boxesTag){
                  for(boxes of boxesTag){
                      boxes.style.backgroundColor = "white"
                      
                }     
                i=0; 
                        // }
                    // }
                clearInterval(()=>{
        
                    new_interval
                },500
                )
    }else{
        console.log('Illegal button');

    }

})
