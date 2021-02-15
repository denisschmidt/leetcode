import itertools


class Solution:
    # Time O(N)
    # Space O(N)
    def canEat(self, candiesCount, queries):
        res = []
        prefix = [0] + list(itertools.accumulate(candiesCount))

        for type, favoriteDay, capacity in queries:
            minDay = prefix[type] // capacity
            maxDay = prefix[type + 1] - 1  # take by 1 candy

            res.append(True if minDay <= favoriteDay <= maxDay else False)

        return res