class Solution:
    # Time O(NLogN)
    # Space O(N)
    def twoSumLessThanK(self, nums, k):
        nums.sort()
        n = len(nums)

        lo, hi = 0, n - 1
        ans = -1

        while lo < hi:
            if nums[lo] >= k:
                break

            x = nums[lo] + nums[hi]

            if x > k:
                hi -= 1
            elif x < k:
                ans = max(ans, x)
                lo += 1
            else:
                lo += 1

        return ans