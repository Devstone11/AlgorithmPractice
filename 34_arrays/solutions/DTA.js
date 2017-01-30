// function Array() {
//   this.length = 0
// }
//
// Array.prototype.push = function(value) {
//   this[this.length] = value
//   this.length += 1
// }
//
// Array.prototype.pop = function() {
//   if (this.length > 0) {
//     this.length -= 1
//     var popValue = this[this.length]
//     delete this[this.length]
//   }
//   return popValue
// }

var arr = new Array()
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

function Array() {
  var newArray = {}
  newArray.length = 0
  newArray.push = function (value) {
    newArray[newArray.length] = value;
    newArray.length ++;
  }
  newArray.pop = function () {
    var result = newArray[newArray.length - 1];
    delete newArray[newArray.length - 1];
    newArray.length--;
    return result;
  }
  return newArray
}
