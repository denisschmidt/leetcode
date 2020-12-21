class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        ans, dirs = 0, [[1, 0], [-1, 0], [0, 1], [0, -1]]
        
        def dfs(i, j):
            if i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0]) or grid[i][j] == '0':
                return
            
            grid[i][j] = '0'
            
            for dir in dirs:
                dfs(i + dir[0], j + dir[1])
        
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    dfs(i, j)
                    ans += 1
                    
        return ans