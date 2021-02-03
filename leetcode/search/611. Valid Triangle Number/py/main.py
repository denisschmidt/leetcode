import bisect


class Solution:
    def triangleNumber(self, nums):
        n = len(nums)
        ans = 0
        nums.sort()

        # The main condition nums[i] + nums[j] > nums[k] where i < j < k

        for i in range(n):
            for j in range(i + 1, n):
                # left leftmost index which nums[left_most_index] >= nums[i] + nums[j]
                k = bisect.bisect_left(nums, nums[i] + nums[j])

                ans += max(0, k - j - 1)

        return ans
