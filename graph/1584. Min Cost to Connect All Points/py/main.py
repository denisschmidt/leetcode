class DisjoinSet:
  def __init__(self, n):
    self.parent = [i for i in range(n)]
  
  def find(self, x):
    if self.parent[x] != x:
      self.parent[x] = self.find(self.parent[x])
    return self.parent[x]
  
  def union(self, x, y):
    xr = self.find(x)
    yr = self.find(y)
    if xr != yr:
      self.parent[yr] = xr
      return True
    return False

class Solution:
    def minCostConnectPoints(self, points):
      n = len(points)
      graph = []
      ds = DisjoinSet(n)

      for i in range(n):
        for j in range(i + 1, n):
          dist = self.getDist(points[i], points[j])
          graph.append((dist, i, j))    

      graph.sort()

      res = 0

      for dist, u, v in graph:
        if ds.union(u, v):
          res += dist
      return res

    def getDist(self, x, y):
      return abs(x[0] - y[0]) + abs(x[1] - y[1])