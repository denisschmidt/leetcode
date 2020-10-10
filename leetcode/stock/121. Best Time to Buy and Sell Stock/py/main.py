class Solution:
    def maxProfit(self, prices: List[int]) -> int:
      if len(prices) == 0:
        return 0
    
      take = prices[0]
      res = 0

      for i, price in enumerate(prices, 1):
        if price - take > 0:
          res = max(res, price - take)
        else:
          take = price
        
      return res 