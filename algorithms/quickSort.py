class Solution:
    def sortArray(self, nums):
        def swap(nums, i, j):
          nums[i], nums[j] = nums[j], nums[i] 
          return nums

        def quick_select(nums, lo, hi):
          pivotIndex = lo
          pivotValue = nums[lo]
          lo += 1

          while lo <= hi:
            if nums[lo] < pivotValue:
              lo += 1
            elif nums[hi] >= pivotValue:
              hi -= 1
            else:
              swap(nums, lo, hi)

          swap(nums, pivotIndex, hi)

          return hi
        
        def quick_sort(lo, hi):
          if lo >= hi:
            return

          partition = quick_select(nums, lo, hi) # get pivot index

          quick_sort(lo, partition - 1)
          quick_sort(partition + 1, hi)

        quick_sort(0, len(nums) - 1)

        return nums

x = Solution()
x.sortArray([5,1,1,2,0,0])