// function zip(arr1, arr2) {
//   return arr1.reduce(function(prev, curr, i){
//     prev.push(curr);
//     prev.push(arr2[i]);
//     return prev;
//   }, [])
// }
//
// module.exports = zip ;

function zipArrays(arr1, arr2) {
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
    if (arr2[0]) {
      result.push(arr2.splice(0, 1)[0])
    }
  }
  if (arr2.length > 0) {
    result.concat(arr2);
  }
  return result;
}

console.log(zipArrays([1,2,3], [4,5,6]));
console.log(zipArrays([1,2], [3,4,5,6]));
console.log(zipArrays([1,2,3,4], [5,6]));
