class Solution:
    def stoneGameIII(self, stoneValue):
      def dfs(start):
        if start >= len(stoneValue):
          return 0
        
        if dp[start] != None:
          return dp[start]

        i = start
        curSum = 0
        maxValue = -float('inf')

        while i < len(stoneValue) and i < start + 3:
          curSum += stoneValue[i]
          maxValue = max(maxValue, curSum - dfs(i + 1))
          i += 1

        dp[start] = maxValue

        return dp[start]  

      dp = [None] * len(stoneValue)

      res = dfs(0)

      if res > 0:
        return 'Alice'
      elif res < 0:
        return 'Bob'
      return 'Tie'  
