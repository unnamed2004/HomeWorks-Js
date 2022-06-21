function sortNum(arr){
res = arr.sort(function (a, b) {
return a - b;
});
return res;
}
console.log(sortNum([3,4,65,54,4,87,7454568]));
