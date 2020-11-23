
# Time O(NLogN)
# Space O(N)
class Solution:
    def minimumEffort(self, tasks):
      tasks.sort(key = lambda x: abs(x[0] - x[1]))

      max_sum = 0

      for _, y in tasks:
        max_sum += y

      lo = 1
      hi = max_sum

      while lo < hi:
        mid = (lo + hi) // 2

        if not self.calc(tasks, mid):
          lo = mid + 1
        else:
          hi = mid
      
      return lo

    def calc(self, nums, energy):
      for i in reversed(range(len(nums))):
        x, y = nums[i]
        
        if energy - y >= 0:
          energy -= x
        else:
          return False
      return True

        