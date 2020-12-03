# Time O(N)
# Space O(N)
class Solution:
    def twoSum(self, nums, target):
        memo = {}
        
        for i in range(len(nums)):
            x = target - nums[i]
            
            if x in memo:
                return [memo[x], i]
            
            memo[nums[i]] = i
            
        return []