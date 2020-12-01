# Time O(LogN)
# Space O(N)
class Solution:
    def findMin(self, nums):
        lo, hi = 0, len(nums) - 1
        res = float('inf')

        while lo < hi:
          mid = lo + ((hi - lo) // 2)

          if nums[hi] > nums[mid]:
            res = min(res, nums[mid])
            hi = mid
          elif nums[mid] < nums[lo]:
            res = min(res, nums[mid])
            lo = mid + 1
          else:
            if nums[lo] > nums[hi]:
              res = min(res, nums[hi])
              lo = mid + 1
            else:
              res = min(res, nums[lo])
              hi = mid

        return nums[0] if res == float('inf') else res


    def findMin_II(self, nums):
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