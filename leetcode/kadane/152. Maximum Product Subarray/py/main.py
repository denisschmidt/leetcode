# Time O(N)
# Space O(1)

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        if not nums:
          return 0

        min_val, max_val, N = nums[0], nums[0], len(nums)
        res = nums[0]
        
        for i in range(1, N):
          if nums[i] < 0:
            tmp = max_val
            max_val = min_val
            min_val = tmp

          max_val = max(nums[i], max_val * nums[i])
          min_val = min(nums[i], min_val * nums[i])

          res = max(res, max_val)
            
        return res