let arr1 = [];
let n1 = Number(prompt('Enter the size of the array'))
for (let k = 0; k < n1; k++) {
    arr1[k] = Number(prompt('Enter the elements'))
}
for (let i = 1; i < arr1.length; i++) {
    let key = arr1[i];
    let j = i - 1;
    while (j >= 0 && arr1[j] > key) {
        arr1[j + 1] = arr1[j];
        j--;
    }
    arr1[j + 1] = key;
}
console.log(arr1);