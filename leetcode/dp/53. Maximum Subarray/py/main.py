# Time O(N)
# Space O(N)
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        res = nums[0]
        prev = nums[0]

        for i in range(1, len(nums)):
          prev = max(prev + nums[i], nums[i])
          res = max(prev, res)

        return res