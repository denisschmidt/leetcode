/*

Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

Range Sum Query 2D

The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.

Example:
  Given matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
  ]

  sumRegion(2, 1, 4, 3) -> 8
  update(3, 2, 2)
  sumRegion(2, 1, 4, 3) -> 10

Note:
  The matrix is only modifiable by the update function.
  You may assume the number of calls to update and sumRegion function is distributed evenly.
  You may assume that row1 ≤ row2 and col1 ≤ col2.

*/

class NumMatrix {
  constructor(matrix) {
    if (matrix.length) {
      let n = matrix.length;
      let m = matrix[0].length;

      this.matrix = matrix;
      this.prefix_sum = Array(n + 1)
        .fill(0)
        .map(() => Array(m + 1).fill(0));

      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          this.insert(i, j, matrix[i][j]);
        }
      }
    }
  }

  getNext(i) {
    return i + (i & -i);
  }

  getPrev(i) {
    return i - (i & -i);
  }

  insert(x, y, val) {
    for (let i = x + 1; i < this.prefix_sum.length; i = this.getNext(i)) {
      for (let j = y + 1; j < this.prefix_sum[0].length; j = this.getNext(j)) {
        this.prefix_sum[i][j] += val;
      }
    }
  }

  update(x, y, val) {
    let d = val - this.matrix[x][y];

    this.matrix[x][y] = val;

    this.insert(x, y, d);
  }

  search(x, y) {
    let sum = 0;

    for (let i = x; i > 0; i = this.getPrev(i)) {
      for (let j = y; j > 0; j = this.getPrev(j)) {
        sum += this.prefix_sum[i][j];
      }
    }

    return sum;
  }

  sumRegion(row1, col1, row2, col2) {
    return this.search(row2 + 1, col2 + 1) - this.search(row1, col2 + 1) - this.search(row2 + 1, col1) + this.search(row1, col1);
  }
}
