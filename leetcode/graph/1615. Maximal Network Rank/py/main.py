import collections


class Solution:
    def maximalNetworkRank(self, n: int, roads: List[List[int]]) -> int:
        connected = collections.defaultdict(set)

        for a, b in roads:
            connected[a].add(b)
            connected[b].add(a)

        res = 0

        for i in range(n):
            for j in range(i + 1, n):
                city1 = connected[i]
                city2 = connected[j]
                diff = 1 if i in city2 else 0
                res = max(res, len(city1) + len(city2) - diff)

        return res
