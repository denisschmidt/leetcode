import collections


class Solution:
    def countSubgraphsForEachDiameter(self, n, edges):

        def dfs(u, visited, cities, dist):
            nonlocal max_dist, max_node_dist
            if u in visited:
                return

            visited.add(u)

            if max_dist < dist:
                max_dist = dist
                max_node_dist = u

            for v in adj_list[u]:
                if v not in visited and v in cities:
                    dfs(v, visited, cities, dist + 1)

        adj_list = collections.defaultdict(list)

        for u, v in edges:
            adj_list[u - 1].append(v - 1)
            adj_list[v - 1].append(u - 1)

        ans = [0] * (n - 1)

        for state in range(1, 1 << n):
            cities = set() # Get all possible nodes

            for i in range(n):
                if state >> i & 1:
                    cities.add(i)

            max_dist = -1
            max_node_dist = -1
            visited = set()

            any_node = cities.pop()
            cities.add(any_node)

            # Get diameter of tree
            # Maximum distance between any two cities in our subset (subset must be a subtree) is the diameter of the tree
            dfs(any_node, visited, cities, 0)

            if len(visited) < len(cities):  # Can't visit all nodes of the tree -> Invalid tree
                max_dist = 0
            else:
                dfs(max_node_dist, set(), cities, 0)

            if max_dist > 0:
                ans[max_dist - 1] += 1

        return ans
