function zip(arr1, arr2) {
  return arr1.reduce(function(prev, curr, i){
    prev.push(curr);
    prev.push(arr2[i]);
    return prev;
  }, [])
}

module.exports = zip ;
