// Time O(S * N). На каждом шаге алгоритм находит следующий F (i) за N итераций, где 1 <= i <= S.
// Следовательно, всего итераций S * N итераций
// Space O(N)
const coinChange = (coins, amount) => {
  let dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i < coins[j]) continue;

      dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
    }
  }

  return dp[amount] !== amount + 1 ? dp[amount] : -1;
};
