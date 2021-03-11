import heapq
import collections


class Solution:
    # Prim's algorithm
    # Time O((V + E) * LogV)
    # Space O(V + E)
    def minimumCost(self, N: int, connections):
        adj_list = collections.defaultdict(list)

        for v, u, w in connections:
            adj_list[v].append([u, w])
            adj_list[u].append([v, w])

        queue = []
        visited = set()
        heapq.heappush(queue, (0, 1))

        ans = 0

        while queue:
            w, v = heapq.heappop(queue)

            if v in visited:
                continue

            visited.add(v)
            ans += w

            for u in adj_list[v]:
                heapq.heappush(queue, u)

        return ans if len(visited) == N else -1
