/*
Given a 2D array A, each cell is 0 (representing sea) or 1 (representing land)

A move consists of walking from one land square 4-directionally to another land square, or off the boundary of the grid.

Return the number of land squares in the grid for which we cannot walk off the boundary of the grid in any number of moves.

Example 1:
  Input: [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
  Output: 3
  Explanation: There are three 1s that are enclosed by 0s, and one 1 that isn't enclosed because its on the boundary.

Example 2:
  Input: [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
  Output: 0
  Explanation: All 1s are either on the boundary or can reach the boundary.


Note:
  1 <= A.length <= 500
  1 <= A[i].length <= 500
  0 <= A[i][j] <= 1
  All rows have the same size.

 */

// Time O(N) где N - общее количество ячеек
// Space O(N)
const numEnclaves = matrix => {
  let n = matrix.length;
  let m = matrix[0].length;
  let dirs = [
    [1, 0, 'd'],
    [0, -1, 'l'],
    [0, 1, 'r'],
    [-1, 0, 'u'],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 || j === 0 || i === n - 1 || j === m - 1) {
        dfs(i, j);
      }
    }
  }

  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 1) {
        cnt++;
      }
    }
  }

  return cnt;

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= n || j >= m || matrix[i][j] !== 1) return;

    matrix[i][j] = 0;

    for (let dir of dirs) {
      dfs(i + dir[0], j + dir[1]);
    }
  }
};
