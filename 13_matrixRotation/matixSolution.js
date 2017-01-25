
//
// var dimensions1 = "5x2";
//

//
// var newDimensions1 = "2x5";
//

// var dimensions2 = "3x3";

// var newDimensions2 = "3x3";

//matrix[0][0] should become matrix[0][matrix.length -1]
//matrix[0][1] should become matrix[1][matrix.length -1]
//matrix[1][0] should become matrix[0][matrix.length -2]
//matrix[1][1] should become matrix[1][matrix.length -2]
//matrix[i][j] should become matrix[j][matrix.length -(i+1)]

var matrix = [[44, 23, 2], [21, 10, 4]];
//expect [[21, 44], [10, 23], [4, 2]]
var matrix1 = [[44, 23],
               [21, 10],
               [9, 28],
               [85, 16],
               [33, 18]];
// var result1 = [[33, 85,9, 21, 44],
//                [18, 16, 28, 10, 23]];
var matrix2 = [[29,62,8], [12,60, 31], [99,79,12]];
// var result2 = [[99, 12, 29], [79, 60, 62], [12, 31, 8]];

function rotate(matrix) {
  let result = [];
  matrix[0].forEach(arr => result.push([]));
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      result[j][matrix.length - (i+1)] = matrix[i][j]
    }
  }
  return result;
}
console.log(rotate(matrix2));
