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
  const dirs = [[0, 1, 'r'], [1, 0, 'd'], [0, -1, 'l'], [-1, 0, 'u']];

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

        if (
          x + dir[0] >= 0 &&
          y + dir[1] >= 0 &&
          x + dir[0] < n &&
          y + dir[1] < m &&
          matrix[x + dir[0]][y + dir[1]] !== Number.MAX_VALUE
        ) {
          ans.push(matrix[x][y]);
          matrix[x][y] = Number.MAX_VALUE;
        }
      }

      helper(x, y);
    }
  }

  return ans;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const spiralOrder2 = function(matrix) {
  if (matrix.length === 0) return [];

  const n = matrix.length;
  const m = matrix[0].length;
  const ans = [];

  let rowBegin = 0;
  let rowEnd = n - 1;
  let colBegin = 0;
  let colEnd = m - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // right
    for (let i = colBegin; i <= colEnd; i++) {
      ans.push(matrix[rowBegin][i]);
    }
    rowBegin++;

    // down
    for (let i = rowBegin; i <= rowEnd; i++) {
      ans.push(matrix[i][colEnd]);
    }
    colEnd--;

    // left
    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; i--) {
        ans.push(matrix[rowEnd][i]);
      }
    }
    rowEnd--;

    // up
    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        ans.push(matrix[i][colBegin]);
      }
    }
    colBegin++;
  }

  return ans;
};
