/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let max = 0;

  let dp = Array(n)
    .fill(null)
    .map(() => Array(m).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] == '1') {
        dp[i][j] = Math.max(1, Number(matrix[i][j]));

        for (let k = 1; k + j < m && matrix[i][j + k] == '1'; k++) {
          dp[i][j + k] = dp[i][j + k - 1] + matrix[i][j + k];

          if (i - 1 >= 0 && matrix[i - 1][j + k] !== '0') {
            dp[i][j] += matrix[i - 1][j];
          }
        }

        let val = dp[i][j];

        if ((val & -val) != val) {
          max = Math.max(max, val);
        }
      }
    }
  }

  return max;
};
