function numSplit(x){
let arr=[]
let large =Math.ceil (x/2);
let small = x-large;
arr.push(small);
arr.push(large);
return arr;
       
    }
console.log(numSplit(10));