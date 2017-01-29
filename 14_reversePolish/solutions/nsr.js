// function calculateRPN(string){
// string = string.replace(/\s/g, '');
//   var array = string.split('');
//   console.log(array);
//
// var stack = [];
// for(var i = 0; i < array.length; i++){
//     if(array[i] == 'x'){
//       stack[stack.length-2] = stack[stack.length-2]*stack[stack.length-1];
//       stack.splice(-1,1);
//     }
//     else if(array[i] == '-'){
//       stack[stack.length-2] = stack[stack.length-2] - stack[stack.length-1];
//     stack.splice(-1,1);
//     }
//     else if(array[i] == '+'){
//
//       stack[stack.length-2] = stack[stack.length-2] + stack[stack.length-1];
//     stack.splice(-1,1);
//     }
//     else if(array[i] == '/'){
//       stack[stack.length-2] = stack[stack.length-2]/stack[stack.length-1];
//       stack.splice(-1,1);
//     }
//     else{
//         stack.push(Number(array[i]));
//     }
//
//
//
//     console.log(stack);
// }
// return stack;
// }

console.log(evaluate('5 1 2 + 4 x + 3 -'));
console.log(evaluate('1 2 + 4 5 6 8 x - + +'));

function evaluate(string) {
  var arr = string.split(' ');
  var tempArr = [];
  for (var i = 0; i < arr.length; i++) {
    var last = tempArr[tempArr.length -1];
    var secondLast = tempArr[tempArr.length -2];
    if (arr[i] == '+') {
      tempArr.splice(tempArr.length - 2, 2, last + secondLast);
    } else if (arr[i] == '-') {
      tempArr.splice(tempArr.length - 2, 2, secondLast - last);
    } else if (arr[i] == 'x') {
      tempArr.splice(tempArr.length - 2, 2, last * secondLast);
    } else if (arr[i] == '/') {
      tempArr.splice(tempArr.length - 2, 2, secondLast / last);
    } else {
      tempArr.push(parseInt(arr[i]));
    }
  }
  return tempArr[0];
}
