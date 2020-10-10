class Solution:
    def lengthOfLIS(self, nums):
      if len(nums) == 0:
        return 0

      n = len(nums)
      dp = [1] * n
      max_len = 1

      for i in range(0, n):
        for j in range(i + 1, n):
          if nums[i] < nums[j]:
            dp[j] = max(dp[j], dp[i] + 1)
          if dp[j] > max_len:
            max_len = dp[j]

      return max_len      
