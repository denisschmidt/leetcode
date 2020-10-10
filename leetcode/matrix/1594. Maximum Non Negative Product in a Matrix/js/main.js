// Time O(N^2)
// Space O(N^2)
const maxProductPath = grid => {
  let n = grid.length;
  let m = grid[0].length;
  let INF = Number.MAX_VALUE;
  let mod = 1e9 + 7;

  let dp = Array(n)
    .fill(0)
    .map(() =>
      Array(m)
        .fill(0)
        .map(() => [-INF, INF]),
    );

  dp[0][0][0] = grid[0][0];
  dp[0][0][1] = grid[0][0];

  for (let i = 1; i < n; i++) {
    let x = dp[i - 1][0][0] * grid[i][0];
    dp[i][0] = [x, x];
  }

  for (let i = 1; i < m; i++) {
    let x = dp[0][i - 1][0] * grid[0][i];
    dp[0][i] = [x, x];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      let [max1, min1] = dp[i - 1][j];
      let [max2, min2] = dp[i][j - 1];
      let val = grid[i][j];

      let max = Math.max(max1 * val, max2 * val, min1 * val, min2 * val);
      let min = Math.min(min1 * val, min2 * val, max1 * val, max2 * val);

      dp[i][j][0] = Math.max(max, min);
      dp[i][j][1] = Math.min(max, min);
    }
  }

  let res = Math.max(dp[n - 1][m - 1][0], dp[n - 1][m - 1][1]) % mod;

  return res >= 0 ? res : -1;
};
