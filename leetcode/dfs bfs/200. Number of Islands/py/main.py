class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        def dfs(i, j):
            for _, dir in enumerate([[1, 0], [-1, 0], [0, 1], [0, -1]]):
                x = dir[0] + i
                y = dir[1] + j

                if x < 0 or y < 0 or x >= n or y >= m or grid[x][y] == '0':
                    continue
                grid[x][y] = '0'
                dfs(x, y)
        if len(grid) == 0:
            return 0

        n = len(grid)
        m = len(grid[0])
        ans = 0

        for i in range(n):
            for j in range(m):
                if grid[i][j] == '1':
                    dfs(i, j)
                    ans += 1

        return ans
