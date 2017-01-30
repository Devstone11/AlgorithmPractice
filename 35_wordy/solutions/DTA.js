// module.exports = function(question) {
//   question = question.match(/-?\d+|(plus|minus|multiplied|times|divided)/g)
//   if (!question) {
//     return 42
//   }
//   var answer = parseInt(question[0])
//   for (var i = 1; i < question.length; i++) {
//     if (question[i] in calculations) {
//       answer = calculations[question[i]](answer, parseInt(question[i + 1]))
//     }
//   }
//   return answer
// }
//
// var calculations = {
//   'plus': function(a, b) {
//     return a + b
//   },
//   'minus': function(a, b) {
//     return a - b
//   },
//   'multiplied': function(a, b) {
//     return a * b
//   },
//   'times': function(a, b) {
//     return a * b
//   },
//   'divided': function(a, b) {
//     return a / b
//   }
// }

function translate(wordProblem) {
  var problemArr = wordProblem.split(' ');
  var numberArr = [];
  var operatorArr = [];
  var filtered = problemArr.filter(function(word) {
      return word !== "What" && word !== "is" && word !== "by";
  });
  filtered.forEach(function(element) {
      if (element === 'plus') {
        operatorArr.push('+');
      } else if (element === 'minus') {
        operatorArr.push('-');
      } else if (element === 'times') {
        operatorArr.push('*');
      } else if (element === 'divided') {
        operatorArr.push('/');
      } else if (element[element.length - 1] === '?'){
        numberArr.push(parseInt(element.substring(0, element.length -1)));
      } else {
        numberArr.push(parseInt(element));
      }
  });
  var result = numberArr[0];
  for (var i = 0; i < operatorArr.length; i++) {
    if (operatorArr[i] === '+') {
      result += numberArr[i + 1];
    } else if (operatorArr[i] === '-') {
      result -= numberArr[i + 1];
    } else if (operatorArr[i] === '*') {
      result *= numberArr[i + 1];
    } else if (operatorArr[i] === '/') {
      result /= numberArr[i + 1];
    }
  }
  return result;
}

console.log(translate('What is 78 plus 5 minus 3?'));
