import collections

class Solution:
    def shortestDistanceColor(self, colors, queries):
      def search(nums, target):
        lo = 0
        hi = len(nums) - 1

        while lo < hi:
          mid = lo + ((hi - lo) >> 1)

          if nums[mid] < target:
            lo = mid + 1
          else:
            hi = mid
        
        if lo > 0 and target - nums[lo - 1] < nums[lo] - target:
          return target - nums[lo-1]

        return abs(target - nums[lo])

      maps = collections.defaultdict(list)

      for i, v in enumerate(colors):
        maps[v].append(i)
      
      res = []

      for index, val in queries:
        if val in maps:
          res.append(search(maps[val], index))
        else:
          res.append(-1)

      return res