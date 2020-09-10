class NumMatrix {
  constructor(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    this.prefix_sum = Array(n + 1)
      .fill(0)
      .map(() => Array(m + 1).fill(0));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {}
    }
  }

  insert(i, j, val) {
    i++;
    j++;

    while (i < this.prefix_sum.length) {
      while (j < this.prefix_sum[0].length) {
        this.prefix_sum[i][j] += val;
        j = j + (j & -j);
      }

      i = i + (i & -i);
    }
  }

  search(i, j) {
    let sum = 0;

    while (i > 0) {
      while (j > 0) {
        sum += this.prefix_sum[i][j];
        j = j - (j & -j);
      }
      i = i - (i & -i);
    }

    return sum;
  }

  sumRegion(row1, col1, row2, col2) {
    
  }
}
