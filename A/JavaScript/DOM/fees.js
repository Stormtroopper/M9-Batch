let courseTag = document.getElementById('myDropdown');
let feesTag = document.getElementById('course-fees');
console.log(courseTag);
let temp;
let fees = [35000, 33000, 30000]
courseTag.addEventListener("change", () => {
    if (courseTag.value === 'MERN') {

        feesTag.value = fees[0];
        temp = feesTag.value
        feesTag.readOnly = true;
    }
    else if (courseTag.value === 'Java') {

        feesTag.value = fees[1];
        temp = feesTag.value
        feesTag.readOnly = true;
    } else {

        feesTag.value = fees[2];
        temp = feesTag.value

        feesTag.readOnly = true;
    }
});


let casteTag = document.getElementsByName('gender');
console.log(casteTag.length);
let concessionTag = document.getElementById('concession-fees');
let concessionArr = [10000, 5500, 12000];
for (let i = 0; i < casteTag.length; i++) {
    casteTag[i].addEventListener('click', () => {
        if (casteTag.value === 'obc') {

            concessionTag.value = concessionArr[0];
            concessionTag.disabled = false
            concessionTag.readOnly = true
        }
        else if (casteTag.value === 'oc') {

            concessionTag.value = concessionArr[2];
            concessionTag.disabled = false
            concessionTag.readOnly = true
        } else {
            concessionTag.value = concessionArr[1];
            concessionTag.disabled = false
            concessionTag.readOnly = true
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

            due =feesTag.value- paidTag.value;
            dueTag.value = due;
})

