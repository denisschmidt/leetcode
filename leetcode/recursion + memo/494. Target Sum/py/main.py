class Solution:
    def findTargetSumWays(self, nums, S):
        if not nums: return 0
        
        N = len(nums)
        memo = {}

        def dfs(index, currentSum, target):

          if index >= N:
            return 1 if currentSum == target else 0
          
          if (index, currentSum) in memo:
            return memo[index, currentSum]

          res = 0  
          
          for oper in ['-', '+']:
            if oper == '-':
              res += dfs(index + 1, currentSum - nums[index], target)
            else:
              res += dfs(index + 1, currentSum + nums[index], target)

          memo[index, currentSum] = res

          return res

        return dfs(0, 0, S)