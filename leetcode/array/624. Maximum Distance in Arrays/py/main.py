class Solution:
    def maxDistance(self, arrays):
      if len(arrays) == 0:
        return 0

      max_val = arrays[0][-1]
      min_val = arrays[0][0]
      res = 0

      for i in range(1, len(arrays)):
        res = max(res, abs(arrays[i][-1] - min_val), abs(arrays[i][0] - max_val))
        min_val = min(min_val, arrays[i][0])
        max_val = max(max_val, arrays[i][-1])
        
      return res