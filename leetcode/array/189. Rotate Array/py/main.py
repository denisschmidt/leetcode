# Time O(N)
# Space O(1)
class Solution:
    def reverse(self, nums, start, end):
      while start < end:
        nums[start], nums[end] = nums[end], nums[start]
        start += 1
        end -= 1
    
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        k = k % len(nums)
        
        self.reverse(nums, 0, len(nums) - 1) # Reverse all
        self.reverse(nums, 0, k - 1) # Reverse left half 
        self.reverse(nums, k, len(nums) - 1) # Reverse right half
