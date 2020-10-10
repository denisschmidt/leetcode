import heapq 
import collections

class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
      heap = []
      res = 0
      bucket = collections.Counter(tasks)
      tmp = []

      for name, count in bucket.items():
        heapq.heappush(heap, -1 * count)

      while heap:

        for i in range(n + 1):
          if heap:
            c = (-1 * heapq.heappop(heap)) - 1
            if c > 0:
              tmp.append(c)

          res += 1

          if not heap and not tmp:
            return res

        while tmp:
          c = tmp.pop()
          if c > 0:
            heapq.heappush(heap, -1 * c)        

      return res
