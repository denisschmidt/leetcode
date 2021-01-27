import collections


class Solution:
    # Time O(N)
    # Space O(N)
    def solve(self, k, nums):
        if not nums or k == 0: return 0
        count = {}

        for num in nums:
            count[num] = 0

        max_len = 0
        start = end = 0

        while end < len(nums):
            if count[nums[end]] == 0:
                k -= 1

            count[nums[end]] += 1
            end += 1

            while k < 0:
                if count[nums[start]] == 1:
                    k += 1
                count[nums[start]] -= 1
                start += 1

            if max_len < end - start:
                max_len = end - start

        return max_len
