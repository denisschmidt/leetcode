class Solution:
    # Time O(N*M)
    # Space O(M)
    def canPartition(self, nums: List[int]) -> bool:
        totalSum = sum(nums)
        
        if totalSum % 2 != 0:
            return False

        target = totalSum >> 1
    
        dp = [False] * (target + 1)
    
        dp[0] = True
        
        for i in range(0, len(nums)):
            for num in range(target, nums[i] - 1, -1):
                dp[num] = dp[num] or dp[num - nums[i]]
                
        return dp[target]
    
    # Time O(N*M) Let N be the number of array elements and M be the target sum
    # Space O(N*M)
    def canPartition_II(self, nums: List[int]) -> bool:
        total = sum(nums)
        N = len(nums)

        if total % 2 != 0:
            return False

        memo = {}
            
        def dfs(index, target):
          if target == 0:
            return True
        
          if index == 0 or target < 0:
            return False

          if (index, target) in memo:
            return memo[index, target]

          # At each step we could take current index or not  
          res = dfs(index - 1, target - nums[index]) or dfs(index - 1, target)

          memo[index, target] = res

          return res

        return dfs(N - 1, total / 2)