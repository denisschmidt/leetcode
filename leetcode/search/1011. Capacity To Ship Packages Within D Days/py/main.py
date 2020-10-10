class Solution:
    def shipWithinDays(self, weights: List[int], D: int) -> int:
      l, r = max(weights), sum(weights)
      
      while l < r:
        mid = l + (r - l) // 2

        if self.countDays(weights, mid) > D:
          l = mid + 1
        else:
          r = mid

      return l      

    def countDays(self, weights, maxWeight):
      sum = 0
      days = 0

      for i in range(0, len(weights)):
        sum += weights[i]

        if sum > maxWeight:
          days += 1
          sum = weights[i]  
        
      if sum <= maxWeight:
        return days + 1

      return days