let n=Number(prompt('Enter a size of the array'))
let arr=[]
let count=0
for(let i=0;i<n;i++){
    arr[i]=Number(prompt('Enter the elements'))
}
let key=Number(prompt('Enter the element to be searched'))
for(let j=0;j<n;j++){
    if(arr[j]==key){
        count++;
        console.log(`Element found in position  ${j}`);
        break;
    }
}
if(count==0){
    console.log('Element not available');
}