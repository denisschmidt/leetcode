# Time O(N)
# Space O(N)
class Solution:
    def numDecodings(self, s: str) -> int:
        memo, N = {}, len(s)
        
        def dfs(startIndex):
          if startIndex >= N:
            return 1
         
          if startIndex in memo:
            return memo[startIndex]
            
          totalNumOfWays = 0

          for i in range(startIndex + 1, N + 1):
            num = int(s[startIndex:i])

            if num > 26 or num < 1: break

            totalNumOfWays += dfs(i)              

          memo[startIndex] = totalNumOfWays  
            
          return totalNumOfWays

        return dfs(0)
