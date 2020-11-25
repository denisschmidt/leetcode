
import collections

"""
Same as Course Schedule, Topological sort

For each color, find its maximal rectangle. 

Then, for each different color inside it, it must be a valid color. 

It will be a valid color if inside the maximal rectangle of this different color there is none of the original color. 

Ex:
  1 1 1 1 1
  1 1 2 2 2
  1 1 2 3 3
  1 1 1 1 1

  call dfs for color 1
  --it will call dfs for color 2
  ----it will call dfs for color 3
  ------there is none of (1,2) inside color 3 rectangle, 3 is ok
  ----there is none of (1) inside color 2 rectangle, 2 is ok
  --1 is ok.
"""

class Solution:
    def isPrintable(self, targetGrid):
      inDegree = [0] * 61
      graph = collections.defaultdict(list)
      inf = float('inf')
      n, m = len(targetGrid), len(targetGrid[0])
      queue = collections.deque()
      seen = set()

      def search(color):
        minX, minY, maxX, maxY = inf, inf, -inf, -inf

        for i in range(n):
          for j in range(m):
            if targetGrid[i][j] == color:
              minX = min(minX, i)
              maxX = max(maxX, i)
              minY = min(minY, j)
              maxY = max(maxY, j)

        if minX == inf:
          return None

        for i in range(minX, maxX + 1):
          for j in range(minY, maxY + 1):
            if targetGrid[i][j] != color:
              graph[targetGrid[i][j]].append(color) # paint current color, we need to paint color in grid[i][j] first
              inDegree[color] += 1

      for color in range(1, 61):
        search(color)

      for color in range(61):
        if inDegree[color] == 0:
          queue.append(color)
        
      while queue:
        u = queue.popleft()
        
        if u in seen:
          continue

        seen.add(u)

        for v in graph[u]:
          inDegree[v] -= 1

          if inDegree[v] == 0:
            queue.append(v)
                        
      return len(seen) == 61
