let arr=[];
let n=Number(prompt('Enter the size of the array'))
let k=0
for( k in n){
    arr[k]=Number(prompt('Enter the elements'))
}
for(let i=0;i<arr.length;i++){
    let index=i;
    for(j=i+1;j<arr.length;j++){
        if(arr[index]>=arr[j]){
            index=j;
        }
    }
    if(i!=index){
        let temp=arr[i];
        arr[i]=arr[index];
        arr[index]=temp;
    }
}
console.log(`Sorted arr ${arr}`);
