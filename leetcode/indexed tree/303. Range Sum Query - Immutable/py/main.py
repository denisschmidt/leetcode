class NumArray:

    def __init__(self, nums):
        self.size = len(nums)
        self.tree = [0] * (self.size + 1)

        for i in range(self.size):
          self.update(i, nums[i])

    def update(self, index, val):
      index += 1

      while index < self.size + 1:
        self.tree[index] += val
        index = self.getChild(index)

    def getSum(self, index):
      res = 0
      
      while index > 0:
        res += self.tree[index]
        index = self.getParent(index)

      return res

    def getChild(self, index):
      return index + (index & -index)

    def getParent(self, index):
      return index - (index & -index)

    def sumRange(self, i: int, j: int) -> int:
      return self.getSum(j + 1) - self.getSum(i)
