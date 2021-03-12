import collections


class Solution:
    # Topological Sorting
    # https://leetcode.com/problems/minimum-height-trees/solution/
  
    # Time O(E + V) where V - number of nodes then the number of edges would be V - 1
    # Space O(E + V)
    def findMinHeightTrees(self, n: int, edges):
        if not edges: return [0]
        adj_list = collections.defaultdict(list)

        for u, v in edges:
            adj_list[u].append(v)
            adj_list[v].append(u)

        # Initialize the first layer of leaves
        queue = collections.deque()

        for v in range(n):
            if len(adj_list[v]) == 1:
                queue.append(v)

        remaining_nodes = n

        while remaining_nodes > 2:
            size = len(queue)

            remaining_nodes -= size

            for _ in range(size):
                v = queue.popleft()

                for u in adj_list[v]:
                    # remove the current leaves along with the edges
                    adj_list[u].remove(v)

                    if len(adj_list[u]) == 1:
                        queue.append(u)

        # The remaining nodes are the centroids of the graph
        return [v for v in queue]
