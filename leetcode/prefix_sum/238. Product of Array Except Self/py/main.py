class Solution:
    # Time O(N)
    # Space O(N)
    def productExceptSelf(self, nums):
        n = len(nums)
        left = [1] * n
        ans = [0] * n

        for i in range(1, n):
            left[i] = left[i - 1] * nums[i - 1]

        right = 1

        for i in range(n - 2, -2, -1):
            ans[i + 1] = left[i + 1] * right
            right = nums[i + 1] * right

        return ans
