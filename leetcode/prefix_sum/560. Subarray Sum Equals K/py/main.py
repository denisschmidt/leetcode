
import collections

# Time O(N)
# Space O(N)
class Solution:
    def subarraySum(self, nums, k):
        m = collections.Counter({0: 1})
        cur_sum = 0
        ans = 0
                
        for i in range(len(nums)):
          cur_sum += nums[i]
            
          if cur_sum - k in m:
            ans += m[cur_sum - k]    
            
          m[cur_sum] += 1
        
        return ans
