# Time O(N)
# Space O(N)
class RecentCounter:

    def __init__(self):
      self.nums = deque()

    def ping(self, t: int) -> int:
      self.nums.append(t)

      while self.nums:
        if self.nums[0] < t - 3000:
          self.nums.popleft()
        else:
          break
      return len(self.nums)

