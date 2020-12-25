# Time O(N)
# Space O(1)
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        index, N = 0, len(nums)
        localMax = 0
        totalMax = 0 
        
        while index < N and localMax < N - 1:
          # ищем новый максимум в пределах до текущего максимума
          while index < N and index <= totalMax:
            localMax = max(localMax, nums[index] + index)
            index += 1

          if localMax <= totalMax:
            return False

          totalMax = localMax

        return True