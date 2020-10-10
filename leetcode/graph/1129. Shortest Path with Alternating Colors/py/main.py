import collections
import math

class Solution:
    def shortestAlternatingPaths(self, n, red_edges, blue_edges):
      def dfs(u, uColor, target):
        if u == target:
          return
        for [v, vColor] in graph[u]:
          if vColor != uColor and distance[v][vColor] >= distance[u][uColor] + 1:
            distance[v][vColor] = distance[u][uColor] + 1
            dfs(v, vColor, target)
      distance = [[math.inf, math.inf] for _ in range(n)] 
      graph = collections.defaultdict(set)

      for i, j in red_edges:
        graph[i].add((j, 0))
      for i, j in blue_edges:
        graph[i].add((j, 1))

      distance[0][0] = 0
      distance[0][1] = 0

      for i in range(n):
        dfs(0, 0, i)
        dfs(0, 1, i)

      ans = [-1] * n

      for i in range(n):
        x = min(distance[i][0], distance[i][1])
        if x != math.inf:
          ans[i] = x
      return ans
