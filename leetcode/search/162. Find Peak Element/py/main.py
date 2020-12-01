# Time O(LogN)
# Space O(1)
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        n = len(nums)
        lo, hi = 0, n - 1

        while lo < hi:
            mid = lo + ((hi - lo) // 2)

            if (
                (mid == n - 1 and nums[mid] > nums[mid - 1])
                or (mid == 0 and nums[mid] > nums[mid + 1])
                or (nums[mid] > nums[mid + 1] and nums[mid] > nums[mid - 1])
            ):
                return mid

            if nums[mid] < nums[mid + 1]:
                lo = mid + 1
            else:
                hi = mid

        return lo
