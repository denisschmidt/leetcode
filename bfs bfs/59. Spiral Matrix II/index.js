/*
Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

  Input: 3
  Output:
    [
     [ 1, 2, 3 ],
     [ 8, 9, 4 ],
     [ 7, 6, 5 ]
    ]
 */

// Time O(N^2)
// Space O(N)
const generateMatrix = function(n) {
  if (n === 0) return [];

  const matrix = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));

  let rowBegin = 0;
  let rowEnd = n - 1;
  let colBegin = 0;
  let colEnd = n - 1;
  let value = 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    for (let i = colBegin; i <= colEnd; i++) {
      matrix[colBegin][i] = value;
      value++;
    }

    rowBegin++;

    for (let i = rowBegin; i <= rowEnd; i++) {
      matrix[i][colEnd] = value;
      value++;
    }
    colEnd--;

    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; i--) {
        matrix[rowEnd][i] = value;
        value++;
      }
    }
    rowEnd--;

    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        matrix[i][colBegin] = value;
        value++;
      }
    }
    colBegin++;
  }

  return matrix;
};
