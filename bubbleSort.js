var arr = [10,9,8,7,6,5,4,3,2,1];

function bubbleSort(array, i, j) {

  if (j === (array.length + 1)) {
      return array;
  }
  var compareMe = array[j];
  if (array[i] > array[j]) {
    array[j] = array[i];
    array[i] = compareMe;
  }
  return bubbleSort(array, i + 1, j + 1);
}

var array;
// for (var i = 0; i = arr.length+1; i++) {
//   console.log(bubbleSort(arr, 0, 1));
//   console.log(arr);
// }
function mergeSort(arr) {
  
}
