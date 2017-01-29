var p1 = "()(((())))"
var p2 = "())))("
var p3 = ")("

// function pCheck(string) {
//   var open = 0;
//   var check = true;
//   string.split('').forEach(function (par) {
//     par === "(" ? open++ : open--;
//     if (open < 0 ) check = false
//   })
//   return check
// }
//
// console.log(pCheck(p1));
// console.log(pCheck(p2));
// console.log(pCheck(p3));

function parensChecker(string) {
  //split string into array
  //if the first element is not '(', return false. Otherwise,
  //splice that opening paren.
  //iterate through until it finds a closing paren.
  //splice that closing paren.
  //if there is stuff left in the array, do it again.
  var arr = string.split('');
  return arrayHandler(arr);
}

function arrayHandler(arr) {
  if (arr.length === 0) {
    return true;
  } else {
    if (arr[0] !== '(') {
      return false;
    }
    arr.splice(0,1);
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === ')') {
        arr.splice(i, 1);
      }
    }
    return arrayHandler(arr);
  }
}

console.log(parensChecker(p1));
console.log(parensChecker(p2));
console.log(parensChecker(p3));
