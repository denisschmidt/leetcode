import heapq
import collections

# Dijkstra's algorithm
# Time O(nmLog(nm))
class Solution:
    def minCost(self, grid):
      n, m = len(grid), len(grid[0])
      dirs = [[0,1,1],[0,-1,2],[1,0,3],[-1,0,4]]
      inf = 10 ** 9
      costs = [[inf] * m for _ in range(n)]
      heap = []

      heapq.heappush(heap, (0,0,0))
      costs[0][0] = 0

      while heap:
        cost, i, j = heapq.heappop(heap)

        if costs[i][j] != cost:
          continue

        for dir in dirs:
          x = dir[0] + i
          y = dir[1] + j
          new_cost = cost

          if x < 0 or y < 0 or x >= n or y >= m:
            continue

          if grid[i][j] != dir[2]:
            new_cost += 1
          
          if costs[x][y] > new_cost:
            costs[x][y] = new_cost
            heapq.heappush(heap, (new_cost, x, y))

      return costs[n - 1][m - 1]


# Native BFS doesn't correct.
# Modified BFS: visit all 0 neighbors (and also their 0 neighbors, etc...) before visiting any 1 neighbors. 
# The trick is to put 0 neighbors at the front of the queue and 1 neighbors at the end of the queue.
# Always pop from the front of the queue when searching.

# BFS question on Graph.
# Time: O(mn)
# Space: O(mn)
class Solution_II:
    def minCost(self, grid):
      n, m = len(grid), len(grid[0])
      dirs = [[0,1,1],[0,-1,2],[1,0,3],[-1,0,4]]
      queue = collections.deque([(0,0,0)])
      costs = {}

      while queue:
        cost, i, j = queue.popleft()

        while i >= 0 and j >= 0 and i < n and j < m and (i , j) not in costs:
          costs[i, j] = cost

          cur_dir = dirs[grid[i][j] - 1]

          queue += [(cost + 1, i + dir[0], j + dir[1]) for dir in dirs if cur_dir != dir]

          i += cur_dir[0]
          j += cur_dir[1]

      return costs[n - 1, m - 1]

# Same as the prev solution
# BFS question on Graph.
# Time: O(mn)
# Space: O(mn)
class Solution_III:
    def minCost(self, grid):
      n, m = len(grid), len(grid[0])
      dirs = [[0,1,1],[0,-1,2],[1,0,3],[-1,0,4]]
      queue = collections.deque([(0,0)])
      inf = float('inf')
      costs = [[inf] * m for _ in range(n)]
      visited = [[False] * m for _ in range(n)]  
      costs[0][0] = 0

      while queue:
        i, j = queue.popleft()
        visited[i][j] = True
        
        for dir in dirs:
          x = dir[0] + i
          y = dir[1] + j

          if x < 0 or y < 0 or x >= n or y >= m or visited[x][y]:
            continue
          
          edge_weight = 1 if grid[i][j] != dir[2] else 0
          if costs[x][y] > costs[i][j] + edge_weight:
            costs[x][y] = costs[i][j] + edge_weight
  
          if edge_weight == 1:
            queue.append([x, y]) # push back
          else:
            queue.appendleft([x, y]) # push front
          
      return costs[n - 1][m - 1]

        
