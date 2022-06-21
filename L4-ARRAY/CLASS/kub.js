function Pow(arr){
    let sum = 0;
    for (let i=0;i< arr.length;i++){
    sum+=Math.pow(arr[i],3)
    }
    return sum;
}
console.log(Pow([1,5,9]));