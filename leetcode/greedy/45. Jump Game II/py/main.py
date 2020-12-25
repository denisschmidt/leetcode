# Time O(N)
# Space O(1)
class Solution:
    def jump(self, nums):
      ans, N = 0, len(nums)
      maxReach = 0
      localMaxReach = 0
      index = 0

      while index < N and localMaxReach < N - 1:
        # ищем новый максимум в пределах до текущего максимума
        while index < N and index <= maxReach:
          localMaxReach = max(localMaxReach, index + nums[index])
          index += 1

        if localMaxReach <= maxReach:
          return -1

        maxReach = localMaxReach

        ans += 1

      return ans
