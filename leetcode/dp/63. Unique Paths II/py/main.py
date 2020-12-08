# Time O(N^2)
# Space O(N^2)
class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid):
        n, m = len(obstacleGrid), len(obstacleGrid[0])

        dp = [[0] * (m + 1) for _ in range(n + 1)]
                    
        for i in range(1, n + 1):
          for j in range(1, m + 1):
            if obstacleGrid[i - 1][j - 1] == 1:
              continue
            if i == 1 and j == 1:
                dp[i][j] = 1
            else:
                dp[i][j] = dp[i-1][j] + dp[i][j - 1]
                
        return dp[n][m]
            