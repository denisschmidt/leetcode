class Solution:
    # Time O(N*M)
    # Space O(M)
    def canPartition(self, nums):
        total_sum = sum(nums)

        if total_sum % 2 != 0:
            return False

        target = total_sum >> 1

        dp = [False] * (target + 1)

        dp[0] = True

        for i in range(len(nums)):
            for current_sum in reversed(range(nums[i], target + 1)):
                # if it possible to get current sum or not
                dp[current_sum] = dp[current_sum - nums[i]] or dp[current_sum]

        return dp[target]
    
    # Time O(N * M) Let N be the number of array elements and M be the target sum
    # Space O(N * M)
    def canPartition_II(self, nums):
        total_sum = sum(nums)
        memo = {}
        n = len(nums)

        if total_sum % 2 != 0:
            return False
        
        def dfs(index, cur_sum):
            if cur_sum == 0:
                return True
            
            if index == 0 or cur_sum < 0:
                return False
            
            if (index, cur_sum) in memo:
                return memo[index, cur_sum]
            
            # At each step we could take current index or not  
            memo[index, cur_sum] = dfs(index - 1, cur_sum - nums[index]) or dfs(index - 1, cur_sum) 
            
            return memo[index, cur_sum]

        return dfs(n - 1, total_sum // 2)
