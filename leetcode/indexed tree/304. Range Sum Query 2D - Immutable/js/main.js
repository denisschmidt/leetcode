class NumMatrix {
  constructor(matrix) {
    if (matrix.length) {
      let n = matrix.length;
      let m = matrix[0].length;

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
