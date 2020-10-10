class Solution:
    def findRedundantDirectedConnection(self, edges):
      def find(x):
        if parent[x] != x:
          parent[x] = find(parent[x])
        return parent[x]
        
      n = len(edges)  
      parent = [0] * (n + 1)

      ans1 = None
      ans2 = None

      for i in range(len(edges)):
        u, v = edges[i]

        if parent[v] != 0:
          ans1 = [parent[v], v]
          ans2 = [u, v]
          edges[i] = [-1, -1]
        else:
          parent[v] = u
      
      for i in range(n + 1):
        parent[i] = i

      for u, v in edges:
        if u == -1 or v == -1:
            continue
            
        x = find(u)
        y = find(v)

        if x == y:
          if ans1 != None:
            return ans1
          return [u, v]
        else:
          parent[y] = x
      return ans2
    