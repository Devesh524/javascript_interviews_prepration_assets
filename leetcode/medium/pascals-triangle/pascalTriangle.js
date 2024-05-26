// Given an integer numRows, return the first numRows of Pascal's triangle.
//
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
//

//
// Example 1:
//
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
//
// Input: numRows = 1
// Output: [[1]]
//

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const triangle = [];
  if (numRows === 0) {
    return triangle;
  }
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      triangle.push([1]);
    } else {
      const col = triangle[i - 1];
      const newRow = [];
      newRow.push(1);
      for (let j = 1; j < col.length; j++) {
        newRow.push(col[j - 1] + col[j]);
      }
      newRow.push(1);
      triangle.push(newRow);
    }
  }
  return triangle;
};

const test = (numRow) => {
  const triangle = new Array(numRow + 1).fill(1);
  for (let i = 0; i < numRow; i++) {
    triangle[i] = new Array(i + 1).fill(1);
  }
  return triangle;
};
const startTime = new Date();
const numRows = 5;
console.log(test(numRows)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
const endTime = new Date();
const executionTime = endTime - startTime;
console.log(`execution time: ${executionTime} ms`);
