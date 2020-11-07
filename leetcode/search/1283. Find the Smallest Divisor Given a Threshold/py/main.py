import math

# Time O(LogN)
# Space O(1)
class Solution:
    def smallestDivisor(self, nums, threshold):
        lo = 1
        hi = max(nums)

        while lo < hi:
          mid = math.floor((hi + lo) / 2)
          x = self.calc(nums, mid)
                    
          if x > threshold:
            lo = mid + 1
          else:
            hi = mid

        return lo

    def calc(self, nums, divisor):
      res = 0
      for num in nums:
        res += math.ceil(num / divisor)
      return res
