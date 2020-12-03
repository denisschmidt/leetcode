# Time O(N)
# Space O(1)
class Solution:
    def insert(self, intervals, newInterval):
      if not intervals: return [newInterval]

      if newInterval[1] < intervals[0][0]:
        return [newInterval] + intervals

      if newInterval[0] > intervals[-1][1]:
        return intervals + [newInterval]

      res = []
      isExtended = False

      for i in range(len(intervals)):
        if intervals[i][1] >= newInterval[0] and newInterval[1] >= intervals[i][0]:
          newInterval[0] = min(newInterval[0], intervals[i][0])
          newInterval[1] = max(newInterval[1], intervals[i][1])
          isExtended = True
        else:
          if not isExtended:
            if newInterval[1] < intervals[i][0]:
              res.append(newInterval)
              newInterval = intervals[i]
            elif intervals[i][1] < newInterval[0]:
              res.append(intervals[i])
          else:
            res.append(newInterval)
            newInterval = intervals[i]
      
      res.append(newInterval)
        
      return res

