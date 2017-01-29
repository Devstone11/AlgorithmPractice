var arrayOfDigits = [];

function product(number) {
  // var split = number.toString().split('');
  // var result = 0;
  // for (var i = 0; i < split.length-3 ; i++) {
  //   var prod = parseInt(split[i] * split[i + 1] * split[i + 2] * split[i + 3] * split[i + 4]);
  //   if (prod > result) {
  //     result = prod;
  //   }
  // }
  // return result;
  breakDownNumber(number);
  return arrayOfDigits;
}

// console.log(product(127289373913828309127381263));
console.log(product(12728937391382830912738));

// last digit: 4321 % 10 will give 1
// next number: Math.Floor(4321/10) = Math.Floor(432.1) = 432
//
// repeat
//When next number = 0, stop



function breakDownNumber(number) {
  console.log("number: ");
  console.log(number);
  console.log("number % 10: ");
  console.log(number % 10);
  console.log(arrayOfDigits);

  if(number === 0) {
    return;
  } else {
    arrayOfDigits.unshift(number % 10);
    return breakDownNumber(Math.floor(number / 10));
  }
}
