class Solution:
    # Time O(4^K) Here, K refers to the number of moves allowed.
    # Memo Time O(M*N*K) fill the memo once with dimensions m * n * K
    # Space O(M*N*K)
    def findPaths(self, m: int, n: int, K: int, i: int, j: int) -> int:
        memo = {}

        def dfs(x, y, cnt_steps):
            if x == -1 or y == -1 or x == m or y == n:
                return 1

            if cnt_steps == 0:
                return 0

            if (x, y, cnt_steps) in memo:
                return memo[x, y, cnt_steps]

            res = 0

            for dir in [[0, 1], [0, -1], [1, 0], [-1, 0]]:
                res += dfs(x + dir[0], y + dir[1], cnt_steps - 1)
                res %= 1e9 + 7

            memo[x, y, cnt_steps] = res

            return res

        return dfs(i, j, K)

    # Time O(K * N * M)
    # Space O(N * M)
    def findPaths_II(self, n, m, K, start_x, start_y):

        # Store number of ways the position corresponding to the indices (i,j) can be reached
        # Given some particular number of moves
        dp = [[0] * m for _ in range(n)]

        mod = 1e9 + 7
        dp[start_x][start_y] = 1

        # Indicates the total number of possible moves which lead an out of boundary path
        ans = 0

        for _ in range(1, K + 1):
            # Store number of ways the position corresponding to the indices (i,j) can be reached on the K-th step
            temp = [[0] * m for _ in range(n)]

            for i in range(n):
                for j in range(m):
                    for x, y in [[i + 1, j], [i - 1, j], [i, j + 1],
                                 [i, j - 1]]:

                        if x < 0 or x >= n or y < 0 or y >= m:
                            ans += dp[i][j]
                            ans %= mod
                        else:
                            temp[x][y] = temp[x][y] + dp[i][j]
                            temp[x][y] %= mod

            dp = temp

        return ans