# Time O(N)
# Space O(1)
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        current_len = 0
        
        for i in range(len(nums)):
            if i == 0 or nums[i - 1] != nums[i]:
                nums[current_len] = nums[i]
                current_len += 1
                
        return current_len