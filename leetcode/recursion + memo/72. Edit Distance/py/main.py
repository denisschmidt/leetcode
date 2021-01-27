from functools import lru_cache


class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        inf = float('inf')
        memo = {}

        def dfs(index1, index2):
            if index1 >= len(word1) and index2 >= len(word2):
                return 0

            if index1 >= len(word1):
                return len(word2) - index2

            if index2 >= len(word2):
                return len(word1) - index1

            if (index1, index2) in memo:
                return memo[index1, index2]

            res = inf

            if word1[index1] == word2[index2]:
                res = min(res, dfs(index1 + 1, index2 + 1))
            else:
                res = min(res, 1 + dfs(index1, index2 + 1),
                          1 + dfs(index1 + 1, index2 + 1),
                          1 + dfs(index1 + 1, index2))

            memo[index1, index2] = res

            return res

        return dfs(0, 0)

    def minDistance_II(self, word1, word2):
        @lru_cache(None)
        def dfs(s1, s2):
            if not s1 and not s2:
                return 0
            if not s1:
                return len(s2)
            if not s2:
                return len(s1)

            if s1[0] == s2[0]:
                return dfs(s1[1:], s2[1:])
            
            res = float('inf')

            insert = dfs(s1, s2[1:]) + 1
            delete = dfs(s1[1:], s2) + 1
            replace = dfs(s1[1:], s2[1:]) + 1

            return min(res, insert, delete, replace)
            
        return dfs(word1, word2)

    # Time O(N^2)
    # Space O(N^2)
    def minDistance_III(self, word1, word2):
        n, m = len(word1) + 1, len(word2) + 1
        dp = [[0] * n for _ in range(m)]

        for i in range(1, n):
            dp[i][0] = dp[i - 1][0] + 1

        for i in range(1, m):
            dp[0][i] = dp[0][i - 1] + 1

        for i in range(1, n):
            for j in range(1, m):
                if word1[i - 1] == word2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1]
                else:
                    dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1][j],
                                   dp[i][j - 1]) + 1

        return dp[n][m]
