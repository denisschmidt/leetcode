class Solution:
    # Time O(N * M)
    # Space O(N * M)
    def colorBorder(self, grid, r0, c0, color):
        n, m = len(grid), len(grid[0])
        visited = [[False] * m for _ in range(n)]
        coords = []

        def neighbors(i, j):
            for x, y in [[i + 1, j], [i - 1, j], [i, j - 1], [i, j + 1]]:
                if 0 <= x < n and 0 <= y < m:
                    yield x, y

        def isBorder(i, j):
            for x, y in [[i + 1, j], [i - 1, j], [i, j - 1], [i, j + 1]]:
                if 0 <= x < n and 0 <= y < m and grid[x][y] != grid[i][j]:
                    return True
            return False

        def dfs(x, y):

            if x == 0 or y == 0 or x == n - 1 or y == m - 1 or isBorder(x, y):
                coords.append([x, y])

            visited[x][y] = True

            for nextX, nextY in neighbors(x, y):
                if not visited[nextX][nextY] and grid[nextX][nextY] == grid[
                        r0][c0]:
                    dfs(nextX, nextY)

        dfs(r0, c0)

        for x, y in coords:
            grid[x][y] = color

        return grid