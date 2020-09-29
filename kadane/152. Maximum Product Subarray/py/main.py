# Time O(N)
# Space O(1)

class Solution:
    def maxProduct(self, nums):  
      res = maxSoFar = minSoFar = nums[0]  
      
      for i in range(1, len(nums)):
        curMax = max(maxSoFar * nums[i], minSoFar * nums[i], nums[i])
        curMin = min(maxSoFar * nums[i], minSoFar * nums[i], nums[i])
        
        maxSoFar = curMax
        minSoFar = curMin
        
        res = max(res, curMax, curMin)
      return res


