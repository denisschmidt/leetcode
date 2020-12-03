# Time O(N)
# Space O(1)
class Solution:
    def minSubArrayLen(self, s: int, nums: List[int]) -> int:
        start, end = 0, 0
        current_sum = 0
        inf = float('inf')
        min_len = inf

        while end < len(nums):
          current_sum += nums[end]
          end += 1

          while current_sum >= s:
            if min_len > end - start:
              min_len = end - start

            current_sum -= nums[start]
            start += 1

        return min_len if min_len != inf else 0
            