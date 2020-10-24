class Solution:
    def solve(self, A):
        def dfs(next, i, j):
            if j >= len(A):
                return 0

            if (A[i] + A[j]) not in nums_set:
                return 0

            if dp[i][j] != None:
                return dp[i][j]

            res = 0
            for k in range(next, len(A)):
                if A[i] + A[j] == A[k]:
                    res = max(res, 1 + dfs(k + 1, j, k))

            dp[i][j] = res
            return dp[i][j]

        dp = [[None] * len(A) for _ in range(len(A))]

        nums_set = set(A)

        ans = 0

        for i in range(len(A)):
            for j in range(i + 1, len(A)):
                ans = max(ans, dfs(j + 1, i, j))

        return ans + 2 if ans >= 1 else 0
