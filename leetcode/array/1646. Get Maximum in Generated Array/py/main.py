# Time O(N)
# Space O(N)
class Solution:
    def getMaximumGenerated(self, n):
        if n == 0:
            return 0
        nums = [0] * (n + 1)
        
        nums[0] = 0
        nums[1] = 1
        
        for i in range(2, n + 1):
            if i % 2 == 0:
                nums[i] = nums[i // 2]
            else:
                k = (i - 1) // 2 
                nums[i] = nums[k] + nums[k + 1]
        
        return max(nums)