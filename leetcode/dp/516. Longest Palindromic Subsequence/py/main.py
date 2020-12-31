# Time O(N^2)
# Space O(N^2)
class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        n = len(s)
        dp = [[0] * n for _ in range(n)]
        
        for i in range(n):
          dp[i][i] = 1

        for currLen in range(1, n):
          for i in range(n - currLen):
            j = i + currLen

            if s[i] == s[j]:
              dp[i][j] = 2 if j - i == 1 else dp[i+1][j-1] + 2
            else:
              dp[i][j] = max(dp[i+1][j], dp[i][j-1], dp[i+1][j-1])
        
        return dp[0][n-1]