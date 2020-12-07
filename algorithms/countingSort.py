# Time O(N)
# Space O(N)
class Solution:
    def sortArray(self, nums):
      min_val, max_val = min(nums), max(nums)

      count = [0] * (max_val - min_val + 1)

      for num in nums:
        index = num - min_val
        count[index] += 1
      
      index = 0

      for num in range(len(count)):
        for _ in range(count[num]):
          nums[index] = num + min_val
          index += 1
    
      return nums
