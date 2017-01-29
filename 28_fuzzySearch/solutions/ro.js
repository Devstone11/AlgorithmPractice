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

console.log(search("dave"));
