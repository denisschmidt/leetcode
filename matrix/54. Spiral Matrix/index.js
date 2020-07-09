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

const spiralOrder = function(matrix) {
  if (matrix.length === 0) return [];
  const n = matrix.length;
  const m = matrix[0].length;
  const ans = [];
  const dirs = [
    [0, 1, 'r'],
    [1, 0, 'd'],
    [0, -1, 'l'],
    [-1, 0, 'u'],
  ];

  helper(0, 0);

  function helper(start, end) {
    if (start === 3 && end === 0) {
      console.log(matrix);
    }

    if (matrix[start][end] === Number.MAX_VALUE) return;

    ans.push(matrix[start][end]);
    matrix[start][end] = Number.MAX_VALUE;

    for (let dir of dirs) {
      let x = start;
      let y = end;

      while (
        x + dir[0] >= 0 &&
        y + dir[1] >= 0 &&
        x + dir[0] < n &&
        y + dir[1] < m &&
        matrix[x + dir[0]][y + dir[1]] !== Number.MAX_VALUE
      ) {
        x += dir[0];
        y += dir[1];

        if (x + dir[0] >= 0 && y + dir[1] >= 0 && x + dir[0] < n && y + dir[1] < m && matrix[x + dir[0]][y + dir[1]] !== Number.MAX_VALUE) {
          ans.push(matrix[x][y]);
          matrix[x][y] = Number.MAX_VALUE;
        }
      }

      helper(x, y);
    }
  }

  return ans;
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length == 0) return [];
  let n = matrix.length;
  let m = matrix[0].length;

  let startRow = 0;
  let endRow = n - 1;

  let startCol = 0;
  let endCol = m - 1;

  let ans = [];

  while (startRow <= endRow && startCol <= endCol) {
    // right
    for (let i = startCol; i <= endCol; i++) {
      ans.push(matrix[startRow][i]);
    }
    startRow++;

    // down
    for (let i = startRow; i <= endRow; i++) {
      ans.push(matrix[i][endCol]);
    }
    endCol--;

    // left
    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        ans.push(matrix[endRow][i]);
      }
    }
    endRow--;

    // up
    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        ans.push(matrix[i][startCol]);
      }
    }
    startCol++;
  }

  return ans;
};
