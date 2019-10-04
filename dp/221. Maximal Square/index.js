/*
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input:
  1 0 1 0 0
  1 0 1 1 1
  1 1 1 1 1
  1 0 0 1 0

Output: 4

 */

// Time O(N * M)
// Space O(N * M)
const maximalSquare = function(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  let ans = -Number.MAX_VALUE;

  const dp = Array(n)
    .fill(null)
    .map(() => Array(m).fill(0));

  for (let i = 0; i < n; i++) dp[i][0] = matrix[i][0];

  for (let j = 0; j < m; j++) dp[0][j] = matrix[0][j];

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
      ans = Math.max(ans, dp[i][j]);
    }
  }

  return ans;
};

maximalSquare([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
]);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time O(n*m^2)
// Space O(1)
var maximalSquare2 = function(matrix) {
  const n = matrix.length;
  const m = n > 0 ? matrix[0].length : 0;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === '0') continue;

      let sqlen = 1;
      let flag = true;
      while (flag && i + sqlen < n && j + sqlen < m) {
        // row
        for (let k = j; k <= sqlen + j; k++) {
          if (matrix[i + sqlen][k] === '0') {
            flag = false;
            break;
          }
        }

        // cell
        for (let k = i; k <= sqlen + i; k++) {
          if (matrix[k][j + sqlen] === '0') {
            flag = false;
            break;
          }
        }

        if (flag) {
          sqlen++;
        }
      }

      if (ans < sqlen) {
        ans = sqlen;
      }
    }
  }

  return ans * ans;
};
