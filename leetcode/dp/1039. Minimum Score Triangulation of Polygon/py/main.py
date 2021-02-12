from functools import lru_cache


# The same as 312 Burst Balloons
class Solution:
    def minScoreTriangulation(self, nums):
        n = len(nums)

        @lru_cache(None)
        def dfs(left, right):
            if left + 1 == right:
                return 0

            res = float('inf')

            for i in range(left + 1, right):
                curr = nums[left] * nums[i] * nums[right]
                
                res = min(res, dfs(left, i) + curr + dfs(i, right))

            return res

        return dfs(0, n - 1)
