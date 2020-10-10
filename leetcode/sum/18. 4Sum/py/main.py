class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
      def kSum(nums, target, k):
        res = []

        if len(nums) == 0 or nums[0] * k > target or target > nums[-1] * k:
          return res

        if k == 2:
          return self.twoSum(nums, target)

        for i in range(len(nums)):
          if i > 0 and nums[i - 1] == nums[i]:
            continue
          for _, set in enumerate(kSum(nums[i + 1:], target - nums[i], k - 1)):
            res.append([nums[i]] + set)
        
        return res

      nums.sort()
      return kSum(nums, target, 4)

    def twoSum(self, nums, target):
      res = []
      n = len(nums)
      lo, hi = 0, n - 1

      while lo < hi:
        sum = nums[lo] + nums[hi]

        if sum > target or (hi < n - 1 and nums[hi] == nums[hi + 1]):
          hi -=1
        elif sum < target or (lo > 0 and nums[lo] == nums[lo - 1]):
          lo += 1
        else:
          res.append([nums[lo], nums[hi]])
          lo += 1
          hi -= 1
      return res