const display=document.querySelector('#input-id')
const enterTag=document.getElementById('sixteen-button')
let displayValue=(input)=>{
    display.value+=input
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
