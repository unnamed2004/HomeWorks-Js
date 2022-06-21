let arr = [2, 3, 4, 5];

function minMax(arr=[]) {
    let newArr=[]
  let maxNum = 0;
  let min = 99999999999999999999999999999;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }

  newArr.push(min)
  newArr.push(maxNum)

  console.log(newArr)
}

minMax([1,2,3,4])