# Time O(LogN)
# Space O(1)
class Solution:
    def arrangeCoins(self, totalCoins: int) -> int:
        if totalCoins <= 1:
            return totalCoins
    
        lo, hi = 0, totalCoins

        while lo <= hi:
          steps = lo + ((hi - lo) >> 1)
          coins = steps * (steps + 1) // 2
          
          if coins == totalCoins:
            return steps
            
          if coins < totalCoins:
            lo = steps + 1
          else:
            hi = steps - 1
            
        return hi
