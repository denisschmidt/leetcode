class Solution:
    def plusOne(self, nums):

        n = len(nums)
        plus = 1

        for i in range(n - 1, -1, -1):
            if plus == 0: break

            x = nums[i] + plus

            if x == 10:
                nums[i] = 0
                plus = 1
            else:
                nums[i] = x
                plus = 0

        return [1] + nums if plus > 0 else nums
