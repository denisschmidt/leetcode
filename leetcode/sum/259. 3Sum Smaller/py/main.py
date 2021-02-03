class Solution:
    # Time O(N^2)
    # Space O(N)
    def threeSumSmaller(self, nums, target):
        if not nums: return 0

        n = len(nums)
        ans = 0

        nums.sort()

        for i in range(n - 2):
            lo, hi = i + 1, n - 1

            while lo < hi:
                cur = nums[i] + nums[lo] + nums[hi]

                if cur >= target:
                    hi -= 1
                else:
                    ans += hi - lo
                    lo += 1

        return ans