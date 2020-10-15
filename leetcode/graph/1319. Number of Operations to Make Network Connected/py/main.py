# Time O(N)
# Space O(N)
class Solution:
    def makeConnected(self, n, connections):
        def find(x):
          if parent[x] != x:
            parent[x] = find(parent[x])
          return parent[x]
        
        parent = [i for i in range(n)]
        extra_edge = 0

        for x, y in connections:
          xr = find(x)
          yr = find(y)

          if xr != yr:
            parent[yr] = xr
          else:
            extra_edge += 1

        components = 0
        for i in range(n):
          if parent[i] == i:
            components += 1

        return components - 1 if extra_edge >= components - 1 else -1
