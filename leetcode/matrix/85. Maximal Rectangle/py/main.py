# Time O(N^2 * M)
# Space O(N * M)
class Solution:
    def maximalRectangle(self, matrix):
        if not matrix:
            return 0

        ans, n, m = 0, len(matrix), len(matrix[0])
        dp = [[0] * m for _ in range(n)]

        for i in range(n):
            for j in range(m):
                if matrix[i][j] == '1':
                    if j == 0:
                        dp[i][j] = 1
                    else:
                        dp[i][j] = dp[i][j - 1] + 1

                    k = i - 1
                    local = dp[i][j]
                    width = dp[i][j]

                    while k >= 0 and dp[k][j] > 0:
                        width = min(width, dp[k][j])

                        local = max(local, width * (i - k + 1))

                        k -= 1

                    ans = max(ans, local)

        return ans
