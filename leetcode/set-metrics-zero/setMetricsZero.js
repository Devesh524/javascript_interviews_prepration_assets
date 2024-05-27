// Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's.
//
// You must do it in place.
//     Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],
//          [0,0,0],
//          [1,0,1]
//          ]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// brute force solution
const setZeroesBruteForce = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let newMetrix = matrix;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (newMetrix[i][j] === 0) {
        for (let k = 0; k < rows; k++) {
          if (newMetrix[k][j] !== 0) {
            newMetrix[k][j] = 'x';
          }
        }
        for (let k = 0; k < cols; k++) {
          if (newMetrix[i][k] !== 0) {
            newMetrix[i][k] = 'x';
          }
        }
      }
    }
  }

  // order of n * m
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (newMetrix[i][j] == 'x') {
        newMetrix[i][j] = 0;
      }
    }
  }
  return newMetrix;
};

// better solution
const setZeroesBetter = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let zeroCol = Array(cols).fill(0);
  let zeroRow = Array(rows).fill(0);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        zeroCol[j] = 1;
        zeroRow[i] = 1;
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (zeroCol[j] || zeroRow[i]) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

// optimal solution
const setZeroes = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let firstRowHasZero = false;
  let firstColHasZero = false;

  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
    }
  }

  for (let i = 0; i < cols; i++) {
    if (matrix[0][i] === 0) {
      firstRowHasZero = true;
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  return matrix;
};

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

console.log(setZeroes(matrix));
