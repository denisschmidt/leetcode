# Time O(NLogN)
# Space O(N)
class Solution:
    def solve(self, nums):
        if not nums:
            return 0

        def search(nums, target):
            lo, hi = 0, len(nums) - 1

            while lo < hi:
                mid = (lo + hi) >> 1

                if target > nums[mid]:
                    lo = mid + 1
                else:
                    hi = mid

            return lo

        n = len(nums)
        stack = []

        for num in nums:
            if not stack or num > stack[-1]:
                stack.append(num)
            else:
                pos = search(stack, num)

                stack[pos] = num

        return len(stack)
