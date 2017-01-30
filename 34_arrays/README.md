# Arrays

## Reimplement an Array in JS

### Methods

`push`, `pop`, `index`, `length`

**Not allowed to do this:**

```js
var arr = []
```

## Stretch

Create more Array methods

## Example

```js
var arr = array()
arr.push(1)
console.log(arr.length) // -> 1
arr.push(10)
console.log(arr.length) // -> 2
console.log(arr[0]) // -> 1
console.log(arr[1]) // -> 10
console.log(arr.pop()) // -> 10
console.log(arr.length) // -> 1
console.log(arr.pop()) // -> 1
console.log(arr.length) // -> 0
```

## Starting Point

```js
function array() {
  var newArray = {}
  newArray.length = 0
  newArray.push = function (value) {
    //TODO
  }
  newArray.pop = function () {
    //TODO
  }
  return newArray
}
```

function array() {
  var newArray = {}
  newArray.length = 0
  newArray.push = function (value) {
    newArray[length] = value;
    length ++;
  }
  newArray.pop = function () {
    var result = newArray[newArray.length - 1];
    delete newArray[newArray.length - 1];
    newArray.length--;
    return result;
  }
  return newArray
}
