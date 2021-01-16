class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        if len(nums) == 1:
            return nums
        
        n = len(nums)
        dp = [0] * n
        max_number = -1
        max_cnt = -1
        
        nums.sort()
        
        for i in range(len(nums)):
            for j in range(i):
                if nums[i] % nums[j] == 0:
                    dp[i] = max(dp[i], dp[j] + 1)
                
                if max_cnt < dp[i]:
                    max_cnt = dp[i]
                    max_number = nums[i]
        ans = []

        # reconstruct the answer
        
        for i in reversed(range(n)):
            if max_number % nums[i] == 0 and max_cnt == dp[i]:
                ans.append(nums[i])
                max_cnt -= 1
                max_number = nums[i]
                                
        return ans
       