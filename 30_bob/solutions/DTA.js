// module.exports = function Bob() {
//   this.hey = function(input) {
//     if (isEmpty(input) || isAllSpaces(input)) {
//       return 'Fine. Be that way!'
//     }
//     if (isOnlyNumbers(input)) {
//       if (isQuestion(input)) {
//         return 'Sure.'
//       }
//       return 'Whatever.'
//     }
//     if (isQuestion(input)) {
//       if (isAllUppercase(input)) {
//         return 'Whoa, chill out!'
//       }
//       return 'Sure.'
//     }
//     if (isAllUppercase(input)) {
//       return 'Whoa, chill out!'
//     }
//     return 'Whatever.'
//   }
// }
//
// function isAllUppercase(input) {
//   return input === input.toUpperCase()
// }
//
// function isOnlyNumbers(input) {
//   return /^[0-9, ?]+$/.test(input)
// }
//
// function isAllSpaces(input) {
//   for (var i = 0; i < input.length; i++) {
//     if (input[i] != ' ') {
//       return false
//     }
//   }
//   return true
// }
//
// function isQuestion(input) {
//   return input.indexOf('?') === input.length - 1
// }
//
// function isEmpty(input) {
//   return input === ''
// }

function bobResponse(message) {
  if (message[message.length -1] === '?') {
    return 'Sure.';
  } else if (message[message.length -1] === '!') {
    return 'Whoa, chill out!';
  } else if (message === '') {
    return 'Fine, be that way!'
  } else {
    return 'Whatever';
  }
}

console.log(bobResponse('blerb'));
