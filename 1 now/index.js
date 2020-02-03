var minDistance = function(word1, word2) {
  let n = word1.length;
  let m = word2.length;

  let dp = Array(n + 1)
    .fill(null)
    .map(() => Array(m + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (i === 0) {
        dp[0][j] = j;
      } else if (j === 0) {
        dp[i][0] = i;
      } else if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[n][m];
};

let a = minDistance('s', 'eat');
console.log(a);
