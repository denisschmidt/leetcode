class Solution:
    def minDistance(self, word1, word2):
      n = len(word1) + 1
      m = len(word2) + 1
      dp = [[0] * n for _ in range(m)]

      for i in range(1, n):
        dp[i][0] = dp[i-1][0] + 1

      for i in range(1, m):
        dp[0][i] = dp[0][i-1] + 1

      for i in range(1, n):
        for j in range(1, m):
          if word1[i-1] == word2[j-1]:
            dp[i][j] = dp[i-1][j-1]
          else:
            dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1  

      return dp[n][m]      

class Solution_II:
    def minDistance(self, word1, word2):
      """Naive recursive solution"""
      if not word1 and not word2:
        return 0

      if not word1:
        return len(word2)
      
      if not word2:
        return len(word1)
      
      if word1[0] == word2[0]:
        return self.minDistance(word1[1:], word2[1:])
      
      insert = 1 + self.minDistance(word1, word2[1:])
      
      delete = 1 + self.minDistance(word1[1:], word2)
      
      replace = 1 + self.minDistance(word1[1:], word2[1:])
      
      return min(insert, delete, replace)
