// function findGreater(array,number){
//   return array.filter(function(value){
//     return (value > number);
//   })
// }
// var x = findGreater([1,2,3,4,5,6,7,8], 5);
// console.log(x);

function findGreater(arr, number) {
  return arr.filter(function(item) {
    if (item > number) {
      return item;
    }
  })
}

console.log(findGreater([1,2,3,4,5,6,7,8], 5));
