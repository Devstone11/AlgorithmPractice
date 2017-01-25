//
// function letterCount(string){
// //A place to store teh counters
//   var counters = {};
//   //get the length of the input string
//   var length = string.length;
//   for(var i = 0; i < length; i++){
//     if (string[i].match(/[a-z]/i)) {
//     // alphabet letters found
//     var letter = string[i].toLowerCase();
//
//     if(!counters[letter]){
//       counters[letter] = 1;
//     }
//     else{
//       counters[letter] = counters[letter]+1;
//     }
//
//
// }
//   }
//   for(i in counters){
//     console.log(i+':'+ counters[i]);
//   }
// }

function countLetters(string) {
  var obj = {};
  for (var i = 0; i < string.length; i++) {
    var char = string[i].toLowerCase()
    if (obj[char]) {
      obj[char]++;
    } else if (string[i] != " "){
      obj[char] = 1;
    }
  }
  return obj;
}
console.log(countLetters("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day"));



// letterCount('hEllooooo3 4 5 1');
