import itertools


class Solution:
    # Time O(N)
    # Space O(N)
    def checkSubarraySum(self, nums, k):
        mapping = {0: -1}

        for i, prefix in enumerate(itertools.accumulate(nums)):
            key = prefix % k if k else prefix

            if key not in mapping:
                mapping[key] = i
            else:
                if i - mapping[key] >= 2:
                    return True

        return False

    # Time O(N^2)
    # Space O(N)
    def checkSubarraySum_II(self, nums, k):
        if k == 0 or len(nums) <= 1:
            return False

        n = len(nums)
        prefix = [0] * (n + 1)

        for i in range(1, n + 1):
            prefix[i] = prefix[i - 1] + nums[i - 1]

        for i in range(n):
            for j in range(i + 1, n):
                cur = prefix[j + 1] - prefix[i]

                if cur % k == 0:
                    return True

        return False
