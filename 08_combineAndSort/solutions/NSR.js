// function combineAndSort(array1,array2){
//   //combine arrays
//   return array1.concat(array2).sort();
// }
//
// var array1 = [ "cat", "dog", "fish", "zebra" ],
//   array2 = [ "lion", "aardvark", "gorilla" ];
//
// console.log(combineAndSort(array1,array2));


function combineAndSort(arr1, arr2) {
  // return arr2.reduce(function(prev, curr) {
  //     prev.push(curr);
  //     return prev;
  //   }, arr1).sort();
  arr2.forEach(function(word) {
    return arr1.push(word);
  })
  return arr1.sort();
}

console.log(combineAndSort([ "cat", "dog", "fish", "zebra" ], [ "lion", "aardvark", "gorilla" ]));
