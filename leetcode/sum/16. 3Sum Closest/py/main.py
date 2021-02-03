class Solution:
    # Time O(N^2)
    # Space O(N) depending on the implementation of the sorting algorithm.
    def threeSumClosest(self, nums, target):
        nums.sort()
        n = len(nums)
        diff = float('inf')

        for i in range(n - 2):
            lo, hi = i + 1, n - 1

            while lo < hi:
                current_sum = nums[i] + nums[lo] + nums[hi]

                if abs(target - current_sum) < abs(diff):
                    diff = target - current_sum

                if current_sum > target:
                    hi -= 1
                elif current_sum < target:
                    lo += 1
                else:
                    return target

        return target - diff
