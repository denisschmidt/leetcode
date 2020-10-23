# Time O(N)
# Space O(1)
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums_set = set(nums)
        ans = 0

        for i in range(len(nums)):
            num = nums[i]
            cnt = 1
            
            while num - 1 in nums_set:
              num -= 1
              cnt += 1
              nums_set.remove(num)

            num = nums[i]
            
            while num + 1 in nums_set:
              num += 1
              cnt += 1
              nums_set.remove(num)

            ans = max(ans, cnt)
        return ans