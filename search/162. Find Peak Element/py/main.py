class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
      l, r = 0, len(nums) - 1
        
      while l < r:
        mid = l + (r - l) // 2

        if nums[mid] > nums[mid - 1] and nums[mid] > nums[mid + 1]:
          return mid

        if mid == 0 and nums[mid] > nums[mid + 1]:
          return mid

        if mid == len(nums) - 1 and nums[mid] > nums[mid - 1]:
          return mid

        if nums[mid + 1] > nums[mid]:
          l = mid + 1
        else:
          r = mid - 1
        
      return l                    
        