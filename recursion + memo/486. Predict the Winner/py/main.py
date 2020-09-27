class Solution:
    def PredictTheWinner(self, nums):
      def dfs(left, right):
        if left > right:
          return 0
        
        if left == right:
          return nums[left]

        if dp[left][right] != None:
          return dp[left][right]  
        
        dp[left][right] = max(
          nums[left] + min(dfs(left + 1, right - 1), dfs(left + 2, right)),
          nums[right] + min(dfs(left + 1, right - 1), dfs(left, right - 2))
        )

        return dp[left][right]
      
      n = len(nums)
      dp = [[None for _ in range(n + 1)] for _ in range(n + 1)]
      
      player1 = dfs(0, n - 1)

      return player1 >= sum(nums) - player1
