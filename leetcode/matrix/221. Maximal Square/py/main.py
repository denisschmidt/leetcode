class Solution:
    # Time O(N*M)
    # Space O(N*M)
    def maximalSquare(self, matrix):
        if len(matrix) == 0:
            return 0

        n, m = len(matrix), len(matrix[0])
        res = 0

        dp = [[0 if matrix[i][j] == '0' else 1 for j in range(0, m)]
              for i in range(0, n)]

        for i in range(0, n):
            for j in range(0, m):
                if dp[i][j] == 1:
                    if i == 0 or j == 0:
                        res = max(res, 1)
                    else:
                        dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1][j],
                                       dp[i][j - 1]) + 1

                        res = max(res, dp[i][j])

        return res * res

    # Time O(n*m^2)
    # Space O(1)
    def maximalSquare_II(self, matrix):
        n, m = len(matrix), len(matrix[0])
        ans = 0

        for i in range(n):
            for j in range(m):
                if matrix[i][j] == "1":
                    length = 1

                    ans = max(ans, length)

                    while i + length <= n and j + length <= m:
                        row, max_col = i, j + length

                        # Row direction
                        while row < i + length and matrix[row][max_col -
                                                               1] == "1":
                            row += 1

                        if row < i + length:
                            break

                        col, max_row = j, i + length

                        # Col direction
                        while col < j + length and matrix[max_row -
                                                          1][col] == "1":
                            col += 1

                        if col < j + length:
                            break

                        ans = max(ans, length)

                        length += 1

        return ans * ans
