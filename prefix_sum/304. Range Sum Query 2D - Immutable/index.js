/*

Given a 2D matrix matrix,
find the sum of the elements inside the rectangle
defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

The above rectangle (with the red border) is defined by (row1, col1) = (2, 1)
and (row2, col2) = (4, 3), which contains sum = 8.

  Given matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
  ]

  sumRegion(2, 1, 4, 3) -> 8
  sumRegion(1, 1, 2, 2) -> 11
  sumRegion(1, 2, 2, 4) -> 12

*/

class NumMatrix {
  constructor(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return;

    let n = matrix.length;
    let m = matrix[0].length;
    let prefix = Array(n)
      .fill(0)
      .map(() => Array(m + 1).fill(0));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        prefix[i][j + 1] = prefix[i][j] + matrix[i][j];
      }
    }

    this.prefix = prefix;
  }

  sumRegion(row1, col1, row2, col2) {
    let sum = 0;
    for (let r = row1; r <= row2; r++) {
      sum += this.prefix[r][col2 + 1] - this.prefix[r][col1];
    }
    return sum;
  }
}

class NumMatrix_II {
  constructor(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return;

    this.dp = Array(matrix.length + 1)
      .fill(null)
      .map(() => Array(matrix[0].length + 1).fill(0));

    for (let i = 1; i < this.dp.length; i++) {
      for (let j = 1; j < this.dp[0].length; j++) {
        this.dp[i][j] = this.dp[i - 1][j] + this.dp[i][j - 1] + matrix[i - 1][j - 1] - this.dp[i - 1][j - 1];
      }
    }
  }

  sumRegion(row1, col1, row2, col2) {
    row1 = row1 + 1;
    col1 = col1 + 1;
    row2 = row2 + 1;
    col2 = col2 + 1;
    return this.dp[row2][col2] - this.dp[row1 - 1][col2] - this.dp[row2][col1 - 1] + this.dp[row1 - 1][col1 - 1];
  }
}
