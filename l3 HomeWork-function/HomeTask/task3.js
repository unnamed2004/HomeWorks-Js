function c(x){
    let num = 0;
   function cnt(){
    return num= x++
    }
    return cnt;
}
let b = c(1)
console.log(b())
console.log(b())
console.log(b())
console.log(b())
console.log(b())