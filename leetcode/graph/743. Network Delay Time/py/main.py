import collections
import math

class Solution:
    def networkDelayTime(self, times, N, K): 
      def dfs(u):
        for v, w in graph[u]:
          if distance[v] > distance[u] + w:
            distance[v] = distance[u] + w
            dfs(v)
      
      graph = collections.defaultdict(list)

      for u, v, w in times:
        graph[u].append((v, w))

      distance = [math.inf] * (N + 1)
      distance[K] = 0

      dfs(K)
        
      res = 0
      for i in range(1, N + 1):
        if distance[i] == math.inf:
          return -1
        res = max(res, distance[i])
      return res