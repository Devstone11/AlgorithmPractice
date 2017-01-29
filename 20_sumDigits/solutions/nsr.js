// function sumDigits(number){
//   var n = number.toString().split('');
//   var ans = n.map(function(current, index,array){
//     return Number(current);
//   })
//
//   console.log(ans);
//
//   if(ans.length < 2){
//     return n[0];
//   }
//
//   else{
//     var o = ans.reduce(function(previousValue,currentValue){
//       return previousValue+currentValue;
//     })
//     return sumDigits(o);
//   }
// }

console.log(sumDigits(667));

function sumDigits(integer) {
  if (Math.floor(integer / 10) === 0) {
    return integer;
  } else {
    var sum = 0;
    while (integer > 0) {
      sum += integer % 10;
      integer = Math.floor(integer / 10);
    }
    return sumDigits(sum);
  }
}
