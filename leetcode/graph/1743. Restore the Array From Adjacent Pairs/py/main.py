import collections


class Solution:
    # Time O(E + V)
    def restoreArray(self, adjacentPairs):
        adjList = collections.defaultdict(list)
        res = []
        visited = set()

        def dfs(u, parent):
            if u in visited:
                return

            visited.add(u)
            res.append(u)

            for v in adjList[u]:
                if v != parent:
                    dfs(v, u)

        for u, v in adjacentPairs:
            adjList[u].append(v)
            adjList[v].append(u)

        ids = []

        for key in adjList:
            if len(adjList[key]) == 1:
                ids.append(key)

        for i in ids:
            dfs(i, None)

        return res