class Solution:
    # Time O(N^2)
    # Space O(N^2)
    def countSubstrings(self, s: str) -> int:
        n = len(s)
        dp = [[False] * n for _ in range(n)]
        ans = 0

        for i in range(n):
            dp[i][i] = True

        for curLen in range(1, n):
          for i in range(n - curLen):
              j = i + curLen

              if s[i] == s[j]:
                  dp[i][j] = True if j - i == 1 else dp[i + 1][j - 1]
              
              if dp[i][j]:
                  ans += 1

        return ans + n
