function FilterArr(arr){
    let arr1 = [];
    for (let i = 0; i <arr.lenght;i++){
    if (typeof arr [i] === "number"){
        arr1.push(arr[i])
    } 
    }
    return arr1;
}
    
console.log(FilterArr([1 ,2 ,"a","b"]));