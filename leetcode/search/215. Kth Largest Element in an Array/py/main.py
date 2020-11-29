
import heapq

class Solution:
    # heap
    def findKthLargest(self, nums, k):
        return heapq.nlargest(k, nums)[-1]
    
    # quick select
    def findKthLargest_II(self, nums, k):
      def swap(i, j):
        nums[i], nums[j] = nums[j], nums[i]

      def quickSort(lo, hi):
        pivotIndex = lo
        pivotValue = nums[lo]
        lo += 1

        while lo <= hi:
          if pivotValue > nums[lo]:
            lo += 1
          elif pivotValue <= nums[hi]:
            hi -= 1
          else:
            swap(lo, hi)
        swap(pivotIndex, hi)

        return hi


      targetIndex = len(nums) - k
      lo = 0
      hi = len(nums) - 1

      while lo <= hi:
        pivotIndex = quickSort(lo, hi)

        if pivotIndex == targetIndex:
          return nums[pivotIndex]

        if pivotIndex < targetIndex:
          lo = pivotIndex + 1
        else:
          hi = pivotIndex - 1

      return nums[lo]
