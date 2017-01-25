function fizzbuzz(number, i) {
  if (i % 3 === 0 && i % 5 === 0){
    console.log('fizzbuzz');
    fizzbuzz(number, i + 1);
  } else if (i % 3 === 0) {
    console.log('fizz');
    fizzbuzz(number, i + 1);
  } else if (i % 5 === 0) {
    console.log('buzz');
    fizzbuzz(number, i + 1);
  } else if (i > number){
    return ;
  } else if (i === number) {
    console.log(number);
  } else {
    console.log(i);
    fizzbuzz(number, i + 1);
  }
}

fizzbuzz(30, 1);
