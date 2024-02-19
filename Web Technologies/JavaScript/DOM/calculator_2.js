let input = document.getElementById("input")

let buttons = document.querySelectorAll(".btn")

// console.log(input, buttons);
let number = ""

buttons.forEach(ele => {
    ele.addEventListener("click", (event) => {
        // console.log(event.target.innerText);
        let value = event.target.innerText
        if (value == "=") {
            number = eval(number)
        }
        else if (value == "DEL") {
            number = number.slice(0, number.length - 1)
        }
        else if (value == "AC") {
            number = ""
        }
        else {
            number += value
            console.log(number);
        }
        input.value = number
    })
})