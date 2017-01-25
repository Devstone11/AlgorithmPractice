// var diagonals = [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ]
// ];
var diagonals = [
  [ 1, 2, 3, 4, 7],
  [ 4, 5, 6, 8, 9 ],
  [ 7, 8, 9, 2, 1 ],
  [ 1, 2, 3, 4, 5 ],
  [ 1, 1, 1, 1, 1 ]
];
// var diagonals = [
//   [ 1, 2, 3, 4 ],
//   [ 4, 5, 6, 8 ],
//   [ 7, 8, 9, 2 ],
//   [ 1, 2, 3, 4 ]
// ];

// returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7
// console.log(1+5+9+4+4+6+8+1);

function diagonalSum(array) {
  return array.reduce((prev, curr, i, arr) => {return prev + arr[i][i] + arr[i][arr.length - (i+1)]}, 0)
}

console.log(diagonalSum(diagonals));
