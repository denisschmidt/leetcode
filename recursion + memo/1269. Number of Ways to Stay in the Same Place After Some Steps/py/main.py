from functools import lru_cache


class Solution:
    def numWays(self, steps, arrLen):
        @lru_cache(None)
        def dfs(pos, steps):
            if pos < 0 or pos >= arrLen or steps < 0:
                return 0

            if pos == 0 and steps == 0:
                return 1

            totalSteps = dfs(pos + 1, steps - 1) + \
                dfs(pos - 1, steps - 1) + dfs(pos, steps - 1)

            return totalSteps % mod

        mod = 1e9 + 7

        return int(dfs(0, steps))
