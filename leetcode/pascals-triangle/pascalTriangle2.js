// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
//
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
//
// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:
//
// Input: rowIndex = 0
// Output: [1]
// Example 3:
//
// Input: rowIndex = 1
// Output: [1,1]

const getRow = function (rowIndex) {
  const triangle = [];

  for (let i = 0; i <= rowIndex; i++) {
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
  return triangle[triangle.length - 1];
};

const startTime = new Date();
const numRows = 3;
console.log(getRow(numRows)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
const endTime = new Date();
const executionTime = endTime - startTime;
console.log(`execution time: ${executionTime} ms`);
