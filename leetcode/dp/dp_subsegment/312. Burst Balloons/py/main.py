from functools import lru_cache


class Solution:
    # Time O(N^3)
    # Space O(N^2)
    def maxCoins(self, nums):
        # Add dummy elements to avoid edge cases
        nums = [1] + nums + [1]

        n = len(nums)

        @lru_cache(None)
        def dfs(left, right):
            # no more balloons can be added
            if left + 1 == right:
                return 0

            res = 0

            for i in range(left + 1, right):
                # If element j is destroyed last we have to destroy intervals (l, j) and (j, r) before it.
                # For the last operation we receive nums[l] * nums[j] * nums[r] coins.
                cur = nums[left] * nums[i] * nums[right]

                res = max(res, dfs(left, i) + cur + dfs(i, right))

            return res

        return dfs(0, n - 1)

    # Time O(N^3)
    # Space O(N^2)
    def maxCoins_II(self, nums):
        # Add dummy elements to avoid edge cases
        nums = [1] + nums + [1]

        n = len(nums)
        dp = [[0] * n for _ in range(n)]

        # dp[i][j] -- maximum number of coins we can get after destroying (i, j) interval.
        for length in range(2, n):
            for i in range(n - length):
                j = i + length

                # Iterate over the element we'll destroy last
                for k in range(i + 1, j):
                    # If element k is destroyed last we have to destroy intervals (i, k) and (k, j) before it.
                    # For the last operation we receive nums[i] * nums[k] * nums[j] coins.
                    current = nums[i] * nums[k] * nums[j]
                    left = dp[i][k]
                    right = dp[k][j]
                    
                    dp[left][right] = max(dp[left][right], left + current + right)

        return dp[0][n - 1]
