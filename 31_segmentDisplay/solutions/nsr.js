// function sevenSegment(number){
//   var numberArray = number.toString().split('');
//   var length = numberArray.length;
//
//   //Draw Top Line String
//   var topString = '';
//   numberArray.forEach(function(value){
//       topString += drawNumberTopLine(value)+'   '
//   })
//   console.log(topString);
//   //Draw Second Line
//   var secondString = '';
//   numberArray.forEach(function(value){
//     secondString += drawSecondString(value)+'   '
//   })
//   console.log(secondString);
//
//   //Draw Third Line
//   var thirdString = '';
//   numberArray.forEach(function(value){
//     thirdString += drawThirdString(value)+'   ';
//   })
//   console.log(thirdString);
// }
//
// function drawNumberTopLine(number){
//   if(number == 1){
//     return '   ';
//   }
//   if(number == 6 || number == 9){
//     return ' _ '
//   }
//   if(number == 8 || number == 7 || number == 2){
//     return ' _ '
//   }
//   if(number == 3){
//     return ' _ ';
//   }
//
//   if(number == 4){
//     return '   ';
//   }
//   if(number == 5){
//     return ' _ '
//   }
// }
//
// function drawSecondString(number){
//   if(number == 1){
//     return ' | ';
//   }
//   if(number == 5 || number == 6){
//     return '|_ ';
//   }
//   if(number == 3){
//     return ' _|';
//   }
//   if(number == 2){
//     return ' _|';
//   }
//   if(number == 4 || number == 8 || number == 9){
//     return '|_|';
//   }
//   if(number == 7){
//     return '  |';
//   }
// }
// function drawThirdString(number){
//   if(number == 1){
//     return ' | ';
//   }
//   if(number == 2){
//     return '|_ ';
//   }
//   if(number == 5){
//     return ' _|';
//   }
//   if(number == 3){
//     return ' _|';
//   }
//   if(number == 4 || number == 7 || number == 9){
//     return '  |';
//   }
//   if(number == 6 || number == 8){
//     return '|_|';
//   }
// }
//
// sevenSegment(123456789);
// sevenSegment(9998456938271);
// sevenSegment(888);
// sevenSegment(777);
// sevenSegment(666);
// sevenSegment(555);
// sevenSegment(444);
// sevenSegment(333);
// sevenSegment(222);
// sevenSegment(111);

function segmentDisplay(integer) {
  digitArr = integer.toString().split('');
  console.log(line(digitArr, topLine) + '\n' + line(digitArr, middleLine) + '\n' + line(digitArr, bottomLine));
}

function line(digitArr, lineFunc) {
  result = '';
  digitArr.forEach(function(digit) {
    result += lineFunc(digit);
    result += ' ';
  })
  return result;
}

function topLine(digit) {
  if (digit === '0' ||
      digit === '2' ||
      digit === '3' ||
      digit === '5' ||
      digit === '6' ||
      digit === '7' ||
      digit === '8' ||
      digit === '9') {
    return ' _';
  } else {
    return ' ';
  }
}

function middleLine(digit) {
  if (digit === '0') {
    return '| |'
  } else if (digit === '1' || digit === '7') {
    return '  |'
  } else if (digit === '2' || digit === '3') {
    return '_|'
  } else if (digit === '4' || digit === '8' || digit === '9') {
    return '|_|'
  } else {
    return '|_'
  }
}

function bottomLine(digit) {
  if (digit === '0' ||
      digit === '6' ||
      digit === '8') {
    return '|_|'
  } else if (digit === '1' ||
             digit === '4' ||
             digit === '7' ||
             digit === '9') {
    return '  |'
  } else if (digit === '2') {
    return '|_'
  } else {
    return '_|'
  }
}

segmentDisplay(746)
