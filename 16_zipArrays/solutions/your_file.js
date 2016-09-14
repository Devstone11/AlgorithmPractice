function zip(arr1, arr2) {
  var zipped = [];
  for (var i = 0; i < arr1.length; i++) {
    zipped.push(arr1[i]);
    zipped.push(arr2[i]);
  }
  return zipped;
}

function zip(arr1, arr2) {
  return arr1.reduce(function(prev, curr, i){
    prev.push(curr);
    prev.push(arr2[i]);
    return prev;
  }, [])
}

console.log(zip2([1,2,3], [4,5,6]));
