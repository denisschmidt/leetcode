class NumArray:

  def __init__(self, nums: List[int]):
    self.prefix = [0, *itertools.accumulate(nums)]

  def sumRange(self, i: int, j: int) -> int:
    return self.prefix[j + 1] - self.prefix[i]
    