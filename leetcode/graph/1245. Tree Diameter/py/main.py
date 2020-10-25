import collections


class Solution:
    def treeDiameter(self, edges):
        def dfs(u, parent, dist, visited):
            nonlocal max_dist, max_dist_node
            if u in visited:
                return

            if dist > max_dist:
                max_dist = dist
                max_dist_node = u

            visited.add(u)

            for v in adj_list[u]:
                if v != parent:
                    dfs(v, u, dist + 1, visited)

        adj_list = collections.defaultdict(list)

        for u, v in edges:
            adj_list[u].append(v)
            adj_list[v].append(u)

        max_dist = -1
        max_dist_node = None

        dfs(0, None, 0, set())

        dfs(max_dist_node, None, 0, set())

        return max_dist
