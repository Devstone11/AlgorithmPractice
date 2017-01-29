# Reverse Polish Notation Calculator

# Description

[[wiki]](https://en.wikipedia.org/wiki/Reverse_Polish_notation)

Reverse Polish notation is a way to write out a series of algebra expressions.
It accepts `+`, `-`, `x`, `/`, and all number values.
If a number is input, store the value.
If an operator is input, get the last 2 values and operate on them.

## Demonstration

`5 1 2 + 4 × + 3 −`

| INPUT | STACK |
| ----- | ----- |
| 5 | 5 |
| 1 | 5,1 |
| 2 | 5,1,2 |
| + | 5,3 |
| 4 | 5,3,4 |
| x | 5,12 |
| + | 17 |
| 3 | 17,3 |
| - | 14 |

`1 2 + 4 5 6 8 x - + +`

| INPUT | STACK |
| ----- | ----- |
| 1 | 1 |
| 2 | 1,2 |
| + | 3 |
| 4 | 3,4 |
| 5 | 3,4,5 |
| 6 | 3,4,5,6 |
| 8 | 3,4,5,6,8 |
| x | 3,4,5,48 |
| - | 3,4,-43 |
| + | 3,-39 |
| + | -36 |

## Example

```js
console.log(calculateRPN('5 1 2 + 4 × + 3 −')) //14
console.log(calculateRPN('1 2 + 4 5 6 8 * - + +')) //-36
```
[1]
[1, 2]
[3]
[3,4,5,6,8]
[3,4,5,48]
[3,4,-43]
[3,-39]
[-36]

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
    } else if (arr[i] == '*') {
      tempArr.splice(tempArr.length - 2, 2, last * secondLast);
    } else if (arr[i] == '/') {
      tempArr.splice(tempArr.length - 2, 2, secondLast / last);
    } else {
      tempArr.push(parseInt(arr[i]));
    }
  }
  return tempArr[0];
}
