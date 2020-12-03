class Solution:
    def overlap(self, x, y, u, z):
        return z >= x and y >= u

    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if not intervals: return []

        res = []
        intervals.sort(key = lambda x: x[0])
        
        current = intervals[0]

        for i in range(1, len(intervals)):
          if self.overlap(current[0], current[1], intervals[i][0], intervals[i][1]):
            current[0] = min(current[0], intervals[i][0])
            current[1] = max(current[1], intervals[i][1])
          else:
            res.append(current)
            current = intervals[i]
            
        res.append(current)

        return res
        