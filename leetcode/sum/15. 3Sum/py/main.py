class Solution:
    def __init__(self):
        self.res = []

    def threeSum(self, nums):
        nums.sort()

        for i in range(len(nums) - 2):
            if nums[i] > 0:
                break

            if i > 0 and nums[i] == nums[i - 1]:
                continue

            self.twoSum(i, nums)

        return self.res

    def twoSum(self, i, nums):
        lo, hi = i + 1, len(nums) - 1

        while lo < hi:
            sum = nums[i] + nums[lo] + nums[hi]

            if sum > 0:
                hi -= 1
            elif sum < 0:
                lo += 1
            else:
                self.res.append([nums[i], nums[lo], nums[hi]])

                lo += 1
                hi -= 1

                while lo < hi and nums[lo] == nums[lo - 1]:
                    lo += 1
