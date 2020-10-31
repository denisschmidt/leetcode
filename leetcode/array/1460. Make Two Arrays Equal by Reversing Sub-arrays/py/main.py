import collections

class Solution:
    def canBeEqual(self, target: List[int], arr: List[int]) -> bool:
      if len(target) != len(arr):
        return False

      m1 = collections.Counter(target)
      m2 = collections.Counter(arr)

      for k in m1.keys():
        if m1[k] != m2[k]:
          return False
    
      return True