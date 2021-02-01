from functools import lru_cache


class Solution:
    # Time O(N*M)
    # Space O(M)
    def canPartition(self, nums):
        total_sum = sum(nums)

        if total_sum % 2 != 0:
            return False

        target = total_sum >> 1

        dp = [False] * (target + 1)

        dp[0] = True

        for i in range(len(nums)):
            for current_sum in reversed(range(nums[i], target + 1)):
                # if it possible to get current sum or not
                dp[current_sum] = dp[current_sum - nums[i]] or dp[current_sum]

        return dp[target]

    # Time O(N * M) Let N be the number of array elements and M be the target sum
    # Space O(N * M)
    def canPartition_II(self, nums):
        total = sum(nums)

        if total % 2 != 0:
            return False

        n = len(nums)

        @lru_cache(None)
        def dfs(index, currSum, target):
            if index >= n:
                return False

            if currSum > target:
                return False

            if currSum == target:
                return True

            # At each step we could take current index or not

            if dfs(index + 1, currSum + nums[index], target):
                return True

            return dfs(index + 1, currSum, target)

        return dfs(0, 0, total // 2)
