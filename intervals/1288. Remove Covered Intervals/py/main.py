class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        start = end = -1
        res = 0
        intervals.sort(key = lambda x: (x[0], -x[1]))

        for curStart, curEnd in intervals:
          if curStart > start and curEnd > end:
            res += 1
            start = curStart
          end = max(end, curEnd)

        return res



