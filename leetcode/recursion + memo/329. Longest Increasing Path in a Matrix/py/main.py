import collections
import math

class Solution:
    def longestIncreasingPath(self, matrix):
        if not len(matrix):
            return 0
        
        n = len(matrix)
        m = len(matrix[0])
        ans = 0
        visited = [[False] * m for _ in range(n)]
        dist = [[None] * m for _ in range(n)]

        def dfs(matrix, i, j):
          nonlocal n, m

          if visited[i][j]:
            return 0

          if dist[i][j] is not None:
            return dist[i][j]

          visited[i][j] = True

          res = 0

          for d in [[0,1],[0,-1],[1,0],[-1,0]]:
            x = d[0] + i
            y = d[1] + j

            if x < 0 or y < 0 or x >= n or y >= m:
              continue

            if matrix[i][j] < matrix[x][y]:
              res = max(res, 1 + dfs(matrix, x, y))
          
          dist[i][j] = res
          visited[i][j] = False

          return dist[i][j]


        for i in range(len(matrix)):
          for j in range(len(matrix[0])):
              ans = max(ans, dfs(matrix, i, j) + 1)

        return ans