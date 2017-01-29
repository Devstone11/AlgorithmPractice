## Fuzzy Search

Build a search engine that takes in a search word (a string) and looks through a list (an array of strings) and returns another list of "fuzzy" matches to the search word. Fuzzy search means there is a tolerance of one character being incorrect. For example, a search of "Jesz" would return "Jess".

## Usage

Complete the tests set up with `mocha`. Remember to `npm install`. To submit a PR, change the name of the me.js file to your name.

var names = ["mike", "fred", "rob", "dave", "jack", "marry", "mark", "jim", "jill", "june", "jess", "grey", "greg", "mark", "jenn", "richard", "robert"]

function search(term) {
  var results = [];
  termArray = term.split('');
  names.forEach(function(name) {
    var nameArray = name.split('');
    var inequalityLevel = 0;
    for (var i = 0; i < nameArray.length; i++) {
      if (nameArray[i] !== termArray[i]) {
        inequalityLevel ++;
      }
    }
    if (inequalityLevel < 2) {
      results.push(name)
    }
  });
  return results;
}
