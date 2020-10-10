class Solution:
    def findRedundantConnection(self, edges):
        parent = [x for x in range(len(edges)+1)]

        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]

        def union(x, y):
            xr, yr = find(x), find(y)

            if xr != yr:
                parent[yr] = xr
                return True
            return False

        for x, y in edges:
            if not union(x, y):
                return [x, y]
