class Solution:
    def stoneGame(self, piles):
      def dfs(left, right):
        if left > right:
          return 0
        
        if left == right:
          return piles[left]

        if dp[left][right] != None:
          return dp[left][right]

        dp[left][right] = max(
          piles[left] + min(dfs(left + 1, right - 1), dfs(left + 2, right)),
          piles[right] + min(dfs(left + 1, right - 1), dfs(left, right - 2))
        )

        return dp[left][right] 

      n = len(piles)
      dp = [[None for i in range(n + 1)] for j in range(n + 1)]

      ALEX = dfs(0, n - 1)
      LEE = sum(piles) - ALEX
      return ALEX >= LEE
