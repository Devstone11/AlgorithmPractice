// // var result = '';
// function fizzBuzz(start, end, result){
//   var result = result || '';
//   if(start === end + 1){
//     return result;
//   }else{
//     if(start % 3 === 0 && start % 5 === 0){
//       result += 'FizzBuzz';
//     }else if( start % 3 === 0){
//       result += 'Fizz';
//     }else if (start % 5 === 0){
//       result += 'Buzz';
//     }else{
//       result += start;
//     }
//     if(start < end){
//       result += ', '
//     }
//     return fizzBuzz(start + 1, end, result);
//   }
// }
//
// console.log(fizzBuzz(1, 15));


function fizzBuzz(number) {
  handle(number, 1)
}

function handle(number, counter) {
  if (counter % 3 === 0 && counter % 5 === 0 ) {
    console.log('Fizzbuzz');
  } else if (counter % 3 === 0){
    console.log('fizz');
  } else if (counter % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(counter);
  }
  if (counter !== number) {
    handle(number, counter + 1);
  }
}

console.log(fizzBuzz(15));
