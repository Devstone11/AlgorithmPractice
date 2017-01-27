// function upDown(arr) {
//   return arr.reduce(function (curr, next, ind) {
//     var val = arr[ind- 1];
//     if (val) {
//       if (next > val) {
//         var text = "up"
//       } else if (next === val) {
//         var text = "even"
//       } else {
//         var text = "down"
//       }
//       curr.push(text);
//     }
//     return curr
//   }, [])
// }

function upDown(array) {
  var upDowns = [];
  for(var i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      upDowns.push("up");
    } else if (array[i] < array[i - 1]) {
      upDowns.push("down");
    } else {
      upDowns.push("even");
    }
  }
  return upDowns;
}

console.log(upDown([6,3,5,4,3,4,4,5]));
