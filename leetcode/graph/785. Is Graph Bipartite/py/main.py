class Solution:
    # Time O(U + V)
    # Space O(U)
    def isBipartite(self, graph):
        n = len(graph)
        colors = [0] * n

        def dfs(u, parent, color):
            if colors[u] != 0:
                if colors[u] != color:
                    return False
                return True

            colors[u] = color

            for v in graph[u]:
                if v != parent and not dfs(v, u, -colors[u]):
                    return False

            return True

        for u in range(n):
            if colors[u] == 0:
                if not dfs(u, -1, 1):
                    return False

        return True
