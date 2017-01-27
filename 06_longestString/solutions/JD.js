// getLongest = function(array) {
//   var item = "";
//   var logestLength = 0;
//
//   for (var i = 0; i < array.length; i++) {
//     if (array[i].length > logestLength) {
//       item = array[i];
//       logestLength = array[i].length
//     }
//   }
//   var rtnObj = {}
//   rtnObj[item] = logestLength
//   return rtnObj;
// }
//
// getLongestMap = function(array) {
//   var item = "";
//   var logestLength = 0;
//
//   array.map(function(val) {
//     if (val.length > logestLength) {
//       item = val;
//       logestLength = val.length
//     }
//   })
//
//   var rtnObj = {}
//   rtnObj[item] = logestLength
//   return rtnObj;
// }
//
// console.log(getLongest(["truck", "sidewalk", "book"]));
// console.log(getLongestMap(["truck", "sidewalk", "book"]));

function longest(arr) {
  var longestWord ="";
  arr.forEach(function(word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  })
  return {[longestWord]: longestWord.length};
}

console.log(longest(["truck", "sidewalk", "book"]));
