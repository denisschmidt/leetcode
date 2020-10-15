# Time O(NLogN)
# Space O(N)
class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        start, end = [], []
      
        for u, v in intervals:
          start.append(u)
          end.append(v)

        start.sort()
        end.sort()

        idx, rooms = 0, 0
        
        for i in range(len(intervals)):
          if start[i] < end[idx]:
            rooms += 1
          else:
            idx += 1

        return rooms