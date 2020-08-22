class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        lo, hi = 0, len(nums) - 1
        
        while lo < hi:
            sum = nums[lo] + nums[hi]
            
            if sum > target:
                hi -= 1
            elif sum < target:
                lo += 1
            else:
                return [lo + 1, hi + 1]
        return []        