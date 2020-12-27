import collections

# Time O(N^2)
# Space O(N^2)
class Solution:
    def checkIfPrerequisite(self, n, prerequisites, queries):
        adjList = collections.defaultdict(list)
        isReachable = [[False] * n for _ in range(n)]

        def bfs(node):
          queue = collections.deque()
          queue.append(node)

          while queue:
            u = queue.popleft()

            for v in adjList[u]:
              if not isReachable[node][v]:
                isReachable[node][v] = True
                queue.append(v)

        for u, v in prerequisites:
          adjList[u].append(v)
        
        for node in range(n):
          bfs(node)

        return [isReachable[i][j] for i, j in queries]

    def checkIfPrerequisite_II(self, n, prerequisites, queries):
        adjList = collections.defaultdict(list)
        isReachable = [[False] * n for _ in range(n)]

        def dfs(node, u):
          for v in adjList[u]:
            if not isReachable[node][v]:
              isReachable[node][v] = True
              dfs(node, v)

        for u, v in prerequisites:
          adjList[u].append(v)
        
        for node in range(n):
          dfs(node, node)

        return [isReachable[i][j] for i, j in queries]



