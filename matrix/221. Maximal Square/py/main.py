class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        if len(matrix) == 0:
            return 0

        n = len(matrix)
        m = len(matrix[0])
        res = 0
        dp = [[0 if matrix[i][j] == '0' else 1 for j in range(
            0, m)] for i in range(0, n)]

        for i in range(0, n):
            for j in range(0, m):
                if dp[i][j] == 1:
                    if i == 0 or j == 0:
                        res = max(res, 1)
                    else:
                        dp[i][j] = min(dp[i-1][j-1], dp[i-1]
                                       [j], dp[i][j-1]) + 1
                        res = max(res, dp[i][j])

        return res * res
