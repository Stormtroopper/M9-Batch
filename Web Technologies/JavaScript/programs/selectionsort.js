let arr=[12,23,44,23,89,100];
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
