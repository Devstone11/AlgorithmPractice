// function palindrome(word) {
//   return word.split('').reverse().join('') === word
// }

function isPalindrome(string) {
  string.toLowerCase();
  var halfway = Math.floor(string.length / 2);
  for (var i = 0; i < halfway; i++) {
    if (string[i] != string[string.length - (i + 1)])
    {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar"));
