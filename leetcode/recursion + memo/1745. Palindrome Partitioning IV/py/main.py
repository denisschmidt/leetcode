from functools import lru_cache


class Solution:
    # Precompute DP
    # Time O(N^2)
    # Space O(N^2)
    def checkPartitioning(self, s):
        n = len(s)
        dp = [[False] * n for _ in range(n)]

        for length in range(n):
            for i in range(n - length):
                j = i + length

                if i == j:
                    dp[i][j] = True
                elif s[i] == s[j]:
                    dp[i][j] = dp[i + 1][j - 1] if j - i >= 2 else True

        # Brute force 3 segments (with 2 cut pointers) and check if all of them are palindrome.
        for i in range(n):
            for j in range(i + 1, n):
                left = dp[0][i - 1]
                center = dp[i][j - 1]
                right = dp[j][n - 1]

                if left and center and right:
                    return True

        return False

    # Precompute DP + DFS + Memo
    # Time O(N^2)
    # Space O(N^2)
    def checkPartitioning_II(self, s):
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
        def dfs(index, cntPairs):
            if index >= n:
                return cntPairs == 0

            if cntPairs < 0:
                return False

            return any(dfs(i + 1, cntPairs - 1) for i in range(index, n) if dp[index][i])

        return dfs(0, 3)

    # Double dp
    # Dp + Memo
    # Time O(N^3)
    # Space O(N^2)
    def checkPartitioning_III(self, s):
        n = len(s)
        target = 3
        memo = {}
        dpDpindrome = [[None] * n for _ in range(n)]

        def dpindrome(left, right):
            if left >= right:
                return True

            if dpDpindrome[left][right] != None:
                return dpDpindrome[left][right]

            if s[left] == s[right] and dpindrome(left + 1, right - 1):
                dpDpindrome[left][right] = True
                return True

            dpDpindrome[left][right] = False

            return False

        def dfs(index, cntPairs):
            if index >= n:
                return cntPairs == target

            if cntPairs > target:
                return False

            if (index, cntPairs) in memo:
                return memo[index, cntPairs]

            for i in range(index, n):
                if dpindrome(index, i):
                    res = dfs(i + 1, cntPairs + 1)

                    if res:
                        memo[index, cntPairs] = True
                        return True

            memo[index, cntPairs] = False

            return False

        return dfs(0, 0)