class Solution:
    # Time O(V + ElogV)
    # Space O(V)
    def countComponents(self, n, edges):
        parent = [i for i in range(n)]

        def find(u):
            if u != parent[u]:
                parent[u] = find(parent[u])
            return parent[u]

        for u, v in edges:
            x = find(u)
            y = find(v)

            if x != y:
                parent[y] = x

        ans = 0

        for i in range(n):
            if parent[i] == i:
                ans += 1

        return ans
