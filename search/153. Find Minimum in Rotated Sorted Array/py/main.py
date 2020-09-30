# Time O(LogN)
# Space O(N)
class Solution:
    def findMin(self, nums: List[int]) -> int:
      if len(nums) == 2:
        return min(nums)
      
      if nums[0] < nums[-1]:
        return nums[0]

      lo = 0
      hi = len(nums) - 1

      while lo < hi:
        mid = lo + ((hi - lo) >> 1)

        if nums[mid] >= nums[hi]: 
          lo = mid + 1
        else:
          hi = mid

      return nums[lo]