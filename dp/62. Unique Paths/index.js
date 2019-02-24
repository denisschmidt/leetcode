/*

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
  const matrix = Array(n)
    .fill(null)
    .map(() => {
      return Array(m).fill(0);
    });

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 || j === 0) {
        matrix[i][j] = 1;
      } else {
        matrix[i][j] = matrix[i][j - 1] + matrix[i - 1][j];
      }
    }
  }

  return matrix[n - 1][m - 1];
};

const res = uniquePaths(3, 2);
console.log('---', res);
