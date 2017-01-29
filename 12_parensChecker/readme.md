# Parens Checker

Write a function parensChecker which takes a single string argument consisting of a bunch of parentheses. The function should return true if the string is a valid parentheses expression.

# Input

A sequence of parentheses.

"()(((())))"

"())))("

")("

# Output

True if the expression is valid. False otherwise.

# Instructions

Create a file with your initials in the solutions folder.

Update line 1 of test\test.js

`var parensChecker = require('../solutions/yourfile.js');`

Change "yourfile" to your initials file.

To run the tests:

cd into this folder (12_parensChecker)

`npm install -g mocha`

Run the command `mocha`

function parensChecker(string) {
  //split string into array
  //if the first element is not '(', return false. Otherwise,
  //splice that opening paren.
  //iterate through until it finds a closing paren.
  //splice that closing paren.
  //if there is stuff left in the array, do it again.
  var arr = string.split('');
  return arrayHandler(arr);
}

function arrayHandler(arr) {
  if (arr.length === 0) {
    return true;
  } else {
    if (arr[0] !== '(') {
      return false;
    }
    arr.splice(0,1);
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === ')') {
        arr.splice(i, 1);
      }
    }
    return arrayHandler(arr);
  }
}
