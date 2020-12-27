import collections

class Solution:
    # DFS
    def findTheCity(self, n, edges, distanceThreshold):
        adjList = collections.defaultdict(list)
        maxCityIndex = -1
        cntCities = float('inf')
        distance = [[float('inf')] * n for _ in range(n)]

        def dfs(nodeId, u):
          for v, w in adjList[u]:
            if distance[nodeId][v] > distance[nodeId][u] + w and distance[nodeId][u] + w <= distanceThreshold:
              distance[nodeId][v] = distance[nodeId][u] + w
              dfs(nodeId, v)

        for u, v, w in edges:
          adjList[u].append([v, w])
          adjList[v].append([u, w])

        for u in range(n):
          distance[u][u] = 0          
          dfs(u, u)

        for i in range(n):
          cnt = 0

          for j in range(n):
            if i == j or distance[i][j] == float('inf'): continue
            cnt += 1

          if cntCities >= cnt:
            cntCities = cnt
            maxCityIndex = max(maxCityIndex, i)

        return maxCityIndex