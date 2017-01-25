// function rampNumber(number){
//   number = number.toString();
//   var ans = [];
//   for(var i =0; i < number.length;i++){
//     ans.push(Number(number.charAt(i)));
//   }
// for(var i = 0; i < ans.length -1; i++){
//   if(ans[i] > ans[i+1]){
//     return false;
//   }
// }
// return true;
// }
// console.log(rampNumber(12300));
// console.log(rampNumber(123456));

function ramp(number) {
  var isRamp = true;
  var str = number.toString();
  for (var i = 0; i < str.length - 2; i++) {
    if (parseInt(str[i]) > parseInt(str[i + 1])) {
      isRamp = false;
      break;
    }
  }
  return isRamp;
}
console.log(ramp(12300));
console.log(ramp(123456));
