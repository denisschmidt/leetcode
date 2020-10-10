import collections

class Solution:
    def findPairs(self, nums: List[int], k: int) -> int:
      counter = collections.Counter(nums)
      res = 0

      for val in counter:
        if k > 0 and val + k in counter:
          res += 1
        elif k == 0 and counter[val] > 1:
          res += 1
      return res