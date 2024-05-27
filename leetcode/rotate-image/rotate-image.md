
## Constraints

- `n == matrix.length == matrix[i].length`
- `1 <= n <= 20`
- `-1000 <= matrix[i][j] <= 1000`

## Algorithms

### Algorithm: In-Place Rotation

This algorithm rotates the matrix in place without using additional space.

**Time Complexity:** `O(n^2)`  
**Space Complexity:** `O(1)`

1. **Transpose the matrix:** Swap elements symmetrically over the main diagonal.
2. **Reverse each row:** Reverse the elements in each row.

**In-Place Algorithm:**

```javascript
/**
 * Rotates a square matrix in place by 90 degrees clockwise.
 *
 * @param {number[][]} matrix - The square matrix to rotate.
 * @returns {number[][]} - The rotated matrix.
 */
const rotateInPlace = (matrix) => {
  const n = matrix.length;
  
  // Step 1: Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Step 2: Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  
  return matrix;
};

// Example usage:
const matrix2 = [  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(rotateInPlace(matrix2)); // Output: [[7,4,1],[8,5,2],[9,6,3]]
