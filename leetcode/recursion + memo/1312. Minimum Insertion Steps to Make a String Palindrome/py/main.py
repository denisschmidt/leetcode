import math

class Solution:
    def minInsertions(self, s):
        n = len(s)
        dp = [[None] * n for _ in range(n)]

        def dfs(str, left, right):
          if left >= right:
            return 0

          if dp[left][right] != None:
            return dp[left][right]

          res = math.inf

          if s[left] == s[right]:
            res = min(res, dfs(str, left + 1, right - 1))
          else:
            res = min(res, 1 + dfs(str, left + 1, right), 1 + dfs(str, left, right - 1))

          dp[left][right] = res

          return res

        return dfs(s, 0, len(s) - 1)
