# Wordy

Write a program that takes a word problem and returns the answer as an integer.

The program should handle large numbers and negative numbers.

## Input

A word problem.

>What is 5 plus 13?

## Output

The result of parsing and evaluating the word problem.

```js
wordy('What is 5 plus 13?') //18
```

## Note

Remember, that these are verbal word problems, not treated as you normally would treat a written problem. This means that you calculate as you move forward each step. 3 + 2 * 3 = 15, not 9.

## Examples

What is 5 plus 13?

What is 7 minus 5?

What is 6 multiplied by 4?

What is 25 divided by 5?

What is 5 plus 13 plus 6?

What is 7 minus 5 minus 1?

What is 9 minus 3 plus 5?

What is 3 plus 5 minus 8?

What is 5 plus 13?

What is 7 minus 5?

What is 6 times 4?

What is 25 divided by 5?

What is 78 plus 5 minus 3?

What is 18 times 3 plus 16?

What is 4 times 3 divided by 6?

What is 4 plus 3 times 2?


[Source](http://exercism.io/exercises/javascript/wordy/readme)

function translate(wordProblem) {
  var problemArr = wordProblem.split(' ');
  var filtered = problemArr.filter(function(word) {
      return word !== "What" && word !== "is";
  });
  var mapped = filtered.map(function(element) {
      if (element === 'plus') {
        return '+';
      } else if (element === 'minus') {
        return '-';
      } else if (element === 'times') {
        return '*';
      } else if (element === 'divided by') {
        return '/';
      } else {
        return element
      }
  });
  return parseInt(mapped.join(' '));
}
