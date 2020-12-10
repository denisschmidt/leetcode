# Time O(S * N)
# Space O(N)
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        inf = float('inf')
        dp = [inf] * (amount + 1)

        dp[0] = 0

        for target in range(1, amount + 1):
          for i in range(len(coins)):
            if target - coins[i] >= 0:
                dp[target] = min(dp[target], dp[target - coins[i]] + 1)
                
        return -1 if dp[amount] == inf else dp[amount] 