# Up Down

Given an array of numbers, write a program that describes whether each number was higher, lower or even to the previous number.

## Input

An array of numbers (e.g [6,3,5,4,3,4,4,5])

## Output

An array of up down strings (e.g. ["down","up","down","down","up","even","up"])

function upDown(array) {
  var upDowns = [];
  for(var i = 1; i < array.length -1; i++) {
    if (array[i] > array[i - 1]) {
      upDowns.push("up");
    } else if (array[i] < array[i - 1]) {
      upDowns.push("down");
    } else {
      upDowns.push("even");
    }
  }
  return upDowns;
}
