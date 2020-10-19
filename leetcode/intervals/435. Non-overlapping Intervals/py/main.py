# Time O(NLogN)
# Space O(N)
class Solution:
    def eraseOverlapIntervals(self, intervals):
        if len(intervals) == 0:
          return 0

        intervals.sort(key = lambda x: (x[0], -x[1]))

        start, end = intervals[0]
        res = 0

        for i in range(1, len(intervals)):
          if self.overlap([start, end], intervals[i]):
            start = max(start, intervals[i][0])
            end = min(end, intervals[i][1])
            res += 1
          else:
            start, end = intervals[i]
        return res
        
    def overlap(self, int1, int2):
       [x, y] = int1
       [u, z] = int2
       return z > x and y > u

