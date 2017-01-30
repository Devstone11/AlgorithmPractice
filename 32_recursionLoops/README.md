## Recursion

Recursion is a technique where a method calls itself. Recursion can be used to traverse data structures. Before calling itself, a recursion method checks for the base case, which is typically a condition what will cease the loop.

### Challenge

Use recursion to solve [Fizz buzz](https://en.wikipedia.org/wiki/Fizz_buzz)!

### Recursion Example

```js
var list = [1,2,3,4];
addOne(list) // returns [2,3,4,5];

function addOne(array) {
  for (var i = 0; i < array.length; i++) {
    array[i]++
  }
  return array
}

function addOne(array) {
  function recursion(array, index) {
    // base case
    if (array.length == index) {
      return array
    }
    array[index]++
    return recursion(array, index + 1)
  }
  array = recursion(array, 0)
  return array
}
```

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
