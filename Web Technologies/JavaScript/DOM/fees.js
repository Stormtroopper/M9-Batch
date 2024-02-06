let courseTag = document.getElementById('myDropdown');
let feesTag = document.getElementById('course-fees');
console.log(courseTag);
let temp;
let fees = [35000, 33000, 30000]
courseTag.addEventListener("change", () => {
    if (courseTag.value === 'MERN') {

        feesTag.value = fees[0];
        courseTag.style.background = 'purple'
        feesTag.readOnly = true;
    }
    else if (courseTag.value === 'Java') {

        feesTag.value = fees[1];
        temp = feesTag.value
        courseTag.style.background = 'black'

        feesTag.readOnly = true;
    } else {

        feesTag.value = fees[2];
        courseTag.style.background = 'green'
        feesTag.readOnly = true;

    }
});


let casteTag = document.getElementsByName('gender');
console.log(casteTag.length);
let concessionTag = document.getElementById('concession-fees');
let concessionObj = {'OBC':10000,'General' :5500, 'SC':12000};
for (let i = 0; i < casteTag.length; i++) {
    casteTag[i].addEventListener('click', function () {
         if(casteTag[i].value=='general'){

            concessionTag.value =concessionObj.General ;
            concessionTag.disabled = false;
            concessionTag.readOnly = true;
        }
        else if(casteTag[i].value=='obc'){

            concessionTag.value =concessionObj.OBC ;
            concessionTag.disabled = false;
            concessionTag.readOnly = true;
        }
        else{
            concessionTag.value =concessionObj.SC ;
            concessionTag.disabled = false;
            concessionTag.readOnly = true;
        }
    });
}
let paidTag = document.getElementById('paid-fees');
let dueTag = document.getElementById('due-fees');
let btnTag = document.getElementById('btn-cal');
let due = dueTag.value;

btnTag.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(paidTag.value)
    console.log(feesTag.value);

    due = feesTag.value - paidTag.value -concessionTag.value;
    dueTag.value = due;
})

