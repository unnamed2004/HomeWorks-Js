let arr=[1,2,3,4,5];
function deleteFromArray(delParam,arr,addparam){
let index=arr.indexOf(delParam)
arr.splice(index,1,addparam)
}
deleteFromArray(2,arr,7)
console.log(arr);