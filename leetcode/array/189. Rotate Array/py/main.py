class Solution:
    # Time O(N)
    # Space O(1)
    def rotate(self, nums, k):
        n = len(nums)
        pivot = k % n

        def reverse(l, r):
            while l < r:
                nums[l], nums[r] = nums[r], nums[l]
                l, r = l + 1, r - 1

        reverse(0, n - 1)  # Reverse all entire array
        reverse(0, pivot - 1)  # Reverse left half
        reverse(pivot, n - 1)  # Reverse right half

        return nums