const display=document.querySelector('#input-id')
const enterTag=document.getElementById('sixteen-button')
let displayValue=(input)=>{
    console.log(display.value);
    let res=display.value
    console.log(res);
    display.value+=input
    if(res==='DEL'){
        let new_res=res.slice(0,res.length-1);
        console.log(new_res);
        display.value=new_res;
    }
}
let clearValue=()=>{
    display.value=''
}
let calculating=()=>{
    try {
        
        display.value=eval(display.value)
    } catch (error) {
        display.value="Error"
    }
}
enterTag.addEventListener('click',(e)=>{
    console.log(e);
})
