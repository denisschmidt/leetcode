# Time O(LogN)
# Space O(1)
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        lo, hi = 0, len(nums) - 1
        
        while lo < hi:
            mid = lo + ((hi - lo) // 2)
            
            if nums[mid] < target:
                lo = mid + 1
            else:
                hi = mid
        
        if nums[lo] < target:
            return lo + 1
        return lo