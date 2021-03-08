import collections


class Solution:
    # Time O(V + E)
    # Space O(V + E)
    def findOrder(self, n: int, prerequisites: List[List[int]]) -> List[int]:
        adj_list = collections.defaultdict(list)
        indegree = [0] * n
        topological_sorted_order = []

        for u, v in prerequisites:
            adj_list[v].append(u)
            indegree[u] += 1

        queue = collections.deque([i for i in range(n) if indegree[i] == 0])

        while queue:
            v = queue.popleft()

            topological_sorted_order.append(v)

            for u in adj_list[v]:
                indegree[u] -= 1

                if indegree[u] == 0:
                    queue.append(u)

        return topological_sorted_order if len(topological_sorted_order) == n else []
