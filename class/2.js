let a =prompt("enter a")
let findelem =prompt("enter finselem")
let cnt =0
for (let i = 0;i <a.length; i++ ){
if (a.charAt (i) !== findelem){
cnt++;
}
}
console.log(cnt);