/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

// Time O(N^2)
// Space O(N^2)
const spiralOrder = matrix => {
  if (matrix.length == 0) return [];
  let n = matrix.length;
  let m = matrix[0].length;

  let startRow = 0;
  let endRow = n - 1;

  let startCol = 0;
  let endCol = m - 1;

  let res = [];

  while (startRow <= endRow && startCol <= endCol) {
    // right
    for (let i = startCol; i <= endCol; i++) {
      res.push(matrix[startRow][i]);
    }
    startRow++;

    // down
    for (let i = startRow; i <= endRow; i++) {
      res.push(matrix[i][endCol]);
    }
    endCol--;

    // left
    if (endRow >= startRow) {
      for (let i = endCol; i >= startCol; i--) {
        res.push(matrix[endRow][i]);
      }
    }
    endRow--;

    // up
    if (endCol >= startCol) {
      for (let i = endRow; i >= startRow; i--) {
        res.push(matrix[i][startCol]);
      }
    }
    startCol++;
  }

  return res;
};
