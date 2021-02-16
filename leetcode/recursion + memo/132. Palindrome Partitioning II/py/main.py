from functools import lru_cache


class Solution:
    # Time O(N^2) Precompute DP
    # Space O(N^2)
    def minCut(self, s: str) -> int:
        if not s: return 0
        n = len(s)
        dp = [[False] * n for _ in range(n)]

        for length in range(n):
            for i in range(n - length):
                j = i + length

                if i == j:
                    dp[i][j] = True
                elif s[i] == s[j]:
                    dp[i][j] = dp[i + 1][j - 1] if j - i >= 2 else True

        @lru_cache(None)
        def dfs(index):
            if index >= n:
                return 0

            res = float('inf')

            for i in range(index, n):
                if dp[index][i]:
                    res = min(res, dfs(i + 1) + 1)

            return res

        return dfs(0) - 1

    # Top - Down (DFS + Memo)
    # Time O(N^3)
    # Space O(N^2)
    def minCut_II(self, s: str) -> int:
        if not s: return 0

        n = len(s)
        # Double memo
        dp = [None] * n
        dp_is_palindrome = [[None] * n for _ in range(n)]

        def is_palindrome(i, j):
            if i >= j:
                return True

            if dp_is_palindrome[i][j] != None:
                return dp_is_palindrome[i][j]

            if s[i] == s[j] and is_palindrome(i + 1, j - 1):
                dp_is_palindrome[i][j] = True
                return True

            dp_is_palindrome[i][j] = False

            return False

        def dfs(index):
            if index >= len(s):
                return 0

            if dp[index] != None:
                return dp[index]

            res = float('inf')

            for i in range(index, len(s)):
                if is_palindrome(index, i):
                    res = min(res, 1 + dfs(i + 1))

            dp[index] = res

            return res

        return dfs(0) - 1
