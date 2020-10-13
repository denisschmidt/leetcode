import collections

class Solution:
    def sumOfDistancesInTree(self, N: int, edges):
        def dfs(u, parent):
          for v in adj_list[u]:
            if v != parent:
              dfs(v, u)
              cnt_nodes[u] += cnt_nodes[v]
              sum_sub_tree[u] += cnt_nodes[v] + sum_sub_tree[v]


        def dfs2(u, parent):
          for v in adj_list[u]:
            if v != parent:
              sum_sub_tree[v] = sum_sub_tree[u] - cnt_nodes[v] + N - cnt_nodes[v]
              dfs2(v, u)

        adj_list = collections.defaultdict(list)
        cnt_nodes = [1] * N
        sum_sub_tree = [0] * N

        for u, v in edges:
          adj_list[u].append(v)
          adj_list[v].append(u)

        dfs(0, None)
        dfs2(0, None)

        return sum_sub_tree