import heapq


class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        n, m = len(matrix), len(matrix[0])
        dp = [[None] * m for _ in range(n)]
        ans = 0

        def dfs(i, j):
            if dp[i][j] is not None:
                return dp[i][j]

            res = 0

            for x, y in self.getNeighbors(i, j, n, m):
                if matrix[i][j] < matrix[x][y]:
                    res = max(res, 1 + dfs(x, y))

            dp[i][j] = res

            return dp[i][j]

        for i in range(n):
            for j in range(m):
                ans = max(ans, dfs(i, j) + 1)
        return ans

    def longestIncreasingPath_II(self, matrix: List[List[int]]) -> int:
        n, m = len(matrix), len(matrix[0])
        distance = [[1] * m for _ in range(n)]
        queue = []
        ans = 1

        for i in range(n):
            for j in range(m):
                heapq.heappush(queue, (matrix[i][j], i, j))

        while queue:
            size = len(queue)

            for _ in range(size):
                _, i, j = heapq.heappop(queue)

                for x, y in self.getNeighbors(i, j, n, m):
                    if matrix[i][j] < matrix[x][y] and distance[x][y] < distance[i][j] + 1:
                        distance[x][y] = distance[i][j] + 1
                        heapq.heappush(queue, (matrix[x][y], x, y))

        for i in range(n):
            for j in range(m):
                ans = max(ans, distance[i][j])

        return ans

    def getNeighbors(self, i, j, n, m):
        for x, y in [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]:
            if 0 <= x < n and 0 <= y < m:
                yield x, y
