class Solution:
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
