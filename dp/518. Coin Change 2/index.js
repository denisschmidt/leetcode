/*

You are given coins of different denominations and a total amount of money.
Write a function to compute the number of combinations that make up that amount.
You may assume that you have infinite number of each kind of coin.

Example 1:
  Input: amount = 5, coins = [1, 2, 5]
  Output: 4
  Explanation: there are four ways to make up the amount:
  5=5
  5=2+2+1
  5=2+1+1+1
  5=1+1+1+1+1

Example 2:
  Input: amount = 3, coins = [2]
  Output: 0
  Explanation: the amount of 3 cannot be made up just with coins of 2.

Example 3:
  Input: amount = 10, coins = [10]
  Output: 1

Note:
  You can assume that
  0 <= amount <= 5000
  1 <= coin <= 5000
  the number of coins is less than 500
  the answer is guaranteed to fit into signed 32-bit integer518. Coin Change 2
 
*/

// Time O(N)
// Space O(N)
const change = (amount, coins) => {
  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = dp[j] + dp[j - coins[i]];
    }
  }

  return dp[amount];
};

// Time O(N^2)
// Space O(N^2)
const change_II = function(amount, coins) {
  const n = coins.length;

  const dp = Array(n + 1)
    .fill(null)
    .map(() => Array(amount + 1));

  for (let i = 1; i <= n; i++) dp[i][0] = 1;
  for (let i = 1; i <= amount; i++) dp[0][i] = 0;

  dp[0][0] = 1;

  // мы либо включаем текущую монету или нет
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= amount; j++) {
      // не используем текущую монету используем только предыдущий результат
      dp[i][j] = dp[i - 1][j];

      // используем текущую монету и получаем ее предыдущий результат
      if (j >= coins[i - 1]) {
        dp[i][j] += dp[i][j - coins[i - 1]] || 0;
      }
    }
  }

  return dp[n][amount];
};
