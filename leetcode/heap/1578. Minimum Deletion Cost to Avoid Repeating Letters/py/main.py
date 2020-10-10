import heapq 

class Solution:
    def minCost(self, s, cost):
      heap = []
      res = 0
      heapq.heappush(heap, cost[0])

      for i in range(1, len(cost)):
        if s[i - 1] == s[i]:
          heapq.heappush(heap, cost[i])
        else:
          if len(heap) > 1:
            while len(heap) > 1:
              res += heapq.heappop(heap)  

          heapq.heappop(heap)
          heapq.heappush(heap, cost[i])

      while len(heap) > 1:
        res += heapq.heappop(heap)

      return res
