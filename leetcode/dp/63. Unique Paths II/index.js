/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time.
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

 */

// Time O(M * N)
// Space O(M * N)
const uniquePathsWithObstacles = grid => {
  if (grid[0][0] === 1) return 0;

  let n = grid.length;
  let m = grid[0].length;

  const matrix = Array(n)
    .fill(null)
    .map(() => Array(m).fill(0));

  matrix[0][0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue;
      if (grid[i][j] === 1) matrix[i][j] = 0;
      else if (i === 0) {
        matrix[i][j] = matrix[i][j - 1];
      } else if (j === 0) {
        matrix[i][j] = matrix[i - 1][j];
      } else {
        matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
      }
    }
  }

  return matrix[n - 1][m - 1];
};
