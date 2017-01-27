// function anagram(word, test) {
//   return alphabetize(word) === alphabetize(test)
// }
//
// function alphabetize(word) {
//   return word.split('').sort().join('')
// }
//
// //Stretch
// function anagramStretch(word, testArr) {
//   return testArr.filter(function (test) {
//     return alphabetize(word) === alphabetize(test)
//   })
// }

function anagrams(string, arr) {
  var sortedString = string.split('').sort().join('');
  var anagrams = [];
  arr.forEach(function(item) {
    if (item.split('').sort().join('') === sortedString) {
      anagrams.push(item);
    }
  })
  return anagrams;
}

console.log(anagrams("examples", ["pameesxl", "woamxapl", "emaplsic", "selpmaxe"]));
