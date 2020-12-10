# Time O(N)
# Space O(N)
class Solution:
    def rob(self, nums):
        if len(nums) == 1:
            return nums[0]
        
        if len(nums) == 2:
            return max(nums)
        
        N = len(nums)
        dp = [[-1] * 2 for _ in range(N)]

        def dfs(index, isFirst):
          if index >= N:
            return 0

          if index == N - 1:
            return 0 if isFirst else nums[index]

          stepId = 0 if isFirst else 1 

          if dp[index][stepId] != -1:
            return dp[index][stepId]

          res = nums[index]

          if index + 2 < N:
            if index == 0:
              res += dfs(index + 2, True)
            else:
              res += dfs(index + 2, isFirst)

          res = max(res, dfs(index + 1, isFirst))

          dp[index][stepId] = res
        
          return res

        return dfs(0, False)