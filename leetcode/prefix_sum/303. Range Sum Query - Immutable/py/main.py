import itertools

class NumArray:

  def __init__(self, nums):
    """
    n = len(nums)
    self.prefix_sum = [0] * (n + 1)

    for i in range(1, len(nums) + 1):
      self.prefix_sum[i] = self.prefix_sum[i - 1] + nums[i-1]

    """
    self.prefix = [0, *itertools.accumulate(nums)]

  def sumRange(self, i, j):
    return self.prefix[j + 1] - self.prefix[i]
    