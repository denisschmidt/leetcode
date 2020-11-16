import collections

# Time O(N)
# Space O(N)
class Solution:
    def canDivideIntoSubsequences(self, nums, K):
        count = collections.Counter(nums)
        count_seq = max(count.values())
        
        if count_seq * K > len(nums):
            return False
        
        return True