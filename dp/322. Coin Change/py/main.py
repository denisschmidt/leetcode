class Solution:
  def coinChange(self, coins, amount):
    dp = [float('inf')] * (amount + 1)

    dp[0] = 0

    for curSum in range(1, amount + 1):
      for coin in coins:
        if coin > curSum:
          continue

        dp[curSum] = min(dp[curSum], dp[curSum - coin] + 1)
        
      return dp[amount] if dp[amount] != float('inf') else -1
