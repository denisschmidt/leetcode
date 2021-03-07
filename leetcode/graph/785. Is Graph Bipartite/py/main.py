class Solution:
    # Time O(U + V)
    # Space O(U)
    def isBipartite(self, graph: List[List[int]]) -> bool:
        n = len(graph)
        colors = [0] * n

        def dfs(v, parent, color):
            if colors[v] == -color:
                return False

            if colors[v] != 0:
                return True

            colors[v] = color

            for u in graph[v]:
                if u == parent:
                    continue

                if not dfs(u, v, -color):
                    return False

            return True

        for v in range(n):
            if colors[v] == 0 and not dfs(v, -1, 1):
                return False

        return True