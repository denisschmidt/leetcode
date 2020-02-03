/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function(N, rollMax) {
  let dp = Array(N + 1)
    .fill(null)
    .map(() => Array(6).fill(0));

  let total = 6;

  for (let i = 0; i < 6; i++) {
    dp[1][i] = 1;
  }

  for (let n = 2; n <= N; n++) {
    for (let j = 0; j < rollMax.length; j++) {
      dp[n][j] = (total - rollMax[j]) * dp[n - 1][j];
    }
  }

  console.log(dp);

  return dp[N].reduce((acc, v) => acc + v, 0);
};

let a = dieSimulator(2, [2, 2, 2, 2, 2, 2]);
console.log(a);
