import collections
import heapq

class Solution:
    # DFS
    def networkDelayTime(self, times, N, K): 
      def dfs(u):
        for v, w in graph[u]:
          if distance[v] > distance[u] + w:
            distance[v] = distance[u] + w
            dfs(v)
      
      res, inf = 0, float('inf')
      graph = collections.defaultdict(list)
      distance = [inf] * (N + 1)
      
      distance[K] = 0

      for u, v, w in times:
        graph[u].append((v, w))      
      
      # fill distance 
      dfs(K)
        
      for i in range(1, N + 1):
        if distance[i] == inf:
          return -1

        res = max(res, distance[i])
      
      return res

    # Heap
    def networkDelayTime_II(self, time, N, K):
        ans, queue = 0, []
        distance = [float('inf')] * (N + 1)
        adjList = collections.defaultdict(list)

        for u, v, w in time:
          adjList[u].append([v, w])

        heapq.heappush(queue, [0, K])
        distance[K] = 0

        while queue:
          dist, u = heapq.heappop(queue)

          for v, w in adjList[u]:
            if distance[v] > dist + w:
              distance[v] = dist + w
              heapq.heappush(queue, [dist + w, v])
        
        for node in range(1, N + 1):
          if distance[node] == float('inf'):
            return -1
          ans = max(ans, distance[node])

        return ans  