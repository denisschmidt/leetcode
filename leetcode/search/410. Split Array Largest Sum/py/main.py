class Solution:
    # Time O(N * Log(sumofarray))
    # Space O(N)
    def splitArray(self, nums, m):
        if m == len(nums):
            return max(nums)

        lo = 1
        hi = sum(nums)
    
        while lo < hi:
            maxSubarraySum = lo + ((hi - lo ) // 2)
            
            cntSubArrays = self.getCntSubarrays(nums, maxSubarraySum)

            # maxSubarraySum is small, need increase it
            if cntSubArrays > m:
                lo = maxSubarraySum + 1
            else:
                hi = maxSubarraySum
                
        return lo
    
    def getCntSubarrays(self, nums, maxSum):
        currSum = 0
        cnt = 1

        for i in range(len(nums)):
            # maxSum is small
            if nums[i] > maxSum:
                return float('inf')

            if nums[i] + currSum <= maxSum:
                currSum += nums[i]
            else:
                cnt += 1
                currSum = nums[i]
        return cnt

    def splitArray_II(self, nums, m):
        if len(nums) == m:
            return max(nums)

        N = len(nums)
        prefix_sum = [0] * (N + 1)
        inf = float('inf')
        dp = [[-1] * (m + 1) for _ in range(N)]

        for i in range(1, N + 1):
            prefix_sum[i] = prefix_sum[i - 1] + nums[i - 1]
        
        def dfs(index, k):        
            if k < 0:
                return 0
            
            if k == 1:
                return prefix_sum[N] - prefix_sum[index]

            if dp[index][k] != -1:
                return dp[index][k]

            res = inf
            
            for i in range(index, N - 1):
                val = prefix_sum[i + 1] - prefix_sum[index]
                res = min(res, max(val, dfs(i + 1, k - 1)))

            dp[index][k] = res

            return res

        return dfs(0, m)
