from functools import lru_cache

# The same as 312 Burst Balloons

# If we pick any side of our polygon, it can form n - 2 triangles.
# Each such triangle forms 2 sub-polygons.
# We can analyze n - 2 triangles, and get the minimum score for sub-polygons using the recursion.


class Solution:
    # Time O(N^3)
    # Space O(N^2)
    def minScoreTriangulation(self, nums):
        n = len(nums)

        @lru_cache(None)
        def dfs(left, right):
            if left + 1 == right:
                return 0

            if right - left + 1 < 3:
                return 0

            res = float('inf')

            for i in range(left + 1, right):
                curr = nums[left] * nums[i] * nums[right]

                res = min(res, dfs(left, i) + curr + dfs(i, right))

            return res

        return dfs(0, n - 1)

    def minScoreTriangulation_II(self, nums):
        n = len(nums)

        dp = [[0] * n for _ in range(n)]

        for length in range(2, n):
            for left in range(n - length):
                right = length + length

                for mid in range(left + 1, right):
                    current = float(
                        'inf') if dp[left][right] == 0 else dp[left][right]

                    dp[left][right] = min(
                        current, dp[left][mid] +
                        nums[left] * nums[mid] * nums[right] + dp[mid][right])

        return dp[0][n - 1]