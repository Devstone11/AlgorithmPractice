#Palindrome

Write a program to test if a string is palindromic.

A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. Allowances may be made for adjustments to capital letters, punctuation, and word dividers. Examples in English include "A man, a plan, a canal, Panama!", "Amor, Roma", "race car", "stack cats", "step on no pets", "taco cat", "put it up", "Was it a car or a cat I saw?" and "No 'x' in Nixon".

##Input

A string, typically a word.

##Output

Boolean. True if the string is a palindrome.


function isPalindrome(string) {
  var halfway = Math.Floor(string.length / 2);
  for (var i = 0; i < halfway; i++) {
    if (string[i] != string[string.length - (i + 1)])
    {
      return false;
    }
  }
  return true;
}
