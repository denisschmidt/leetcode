// Time O(N^2)
// Space O(N^2)
const restoreMatrix = (rowSum, colSum) => {
  let n = rowSum.length;
  let m = colSum.length;

  let grid = Array(n)
    .fill()
    .map(() => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      grid[i][j] = Math.min(rowSum[i], colSum[j]);

      rowSum[i] -= grid[i][j];
      colSum[j] -= grid[i][j];
    }
  }

  return grid;
};
