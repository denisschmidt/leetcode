/**
 * @param {number[]} piles
 * @return {boolean}
 */
const stoneGame = function(piles) {
  let n = piles.length;
  let dp = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = new Pair();
    }
  }

  for (let i = 0; i < n; i++) {
    dp[i][i].first = piles[i];
    dp[i][i].pick = i;
  }

  for (let len = 2; len <= n; i++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;

      if (piles[i] + dp[i + 1][j].second > piles[j] + dp[i][j - 1].second) {
        dp[i][j].first = piles[i] + dp[i + 1][j].second;
        dp[i][j].second = dp[i + 1][j].first;
        dp[i][j].pick = i;
      } else {
        dp[i][j].first = piles[j] + dp[i][j - 1].second;
        dp[i][j].second = dp[i][j - 1].first;
        dp[i][j].pick = i;
      }
    }
  }

  return dp[0][n - 1];
};

class Pair {
  constructor() {
    this.first = 0;
    this.second = 0;
    this.pick = 0;
  }
}

let ans = stoneGame([3, 9, 1, 2]);
console.log(ans);
