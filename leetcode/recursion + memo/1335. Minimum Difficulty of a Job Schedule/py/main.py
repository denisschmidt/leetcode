import math
import functools

# Time: O(n*n*d)
# Space: O(n*d)
class Solution:
    def minDifficulty(self, jobDifficulty, d):
        n = len(jobDifficulty)
        dp = {}
        
        def dfs(index, group, prev):
          if group > d:
            return math.inf
 
          if index >= n:
            if group == d:
              return prev
            return math.inf
            
          key = str([index, group, prev])
            
          if key in dp:
            return dp[key]
            
          res = math.inf

          # extend group
          if jobDifficulty[index] <= prev:
            res = min(res, dfs(index + 1, group, prev))
          elif jobDifficulty[index] > prev:
            res = min(res, dfs(index + 1, group, jobDifficulty[index]))

          # new group 
          res = min(res, prev + dfs(index + 1, group + 1, jobDifficulty[index]))

          dp[key] = res
            
          return res

        ans = dfs(0, 0, 0)

        return -1 if ans == math.inf else ans

# LRU cache
class Solution_II:
    def minDifficulty(self, jobDifficulty, d):
        n = len(jobDifficulty)
        
        @functools.lru_cache(None)
        def dfs(index, group, prev):
          if group > d:
            return math.inf
 
          if index >= n:
            if group == d:
              return prev
            return math.inf
            
          res = math.inf

          # extend group
          if jobDifficulty[index] <= prev:
            res = min(res, dfs(index + 1, group, prev))
          elif jobDifficulty[index] > prev:
            res = min(res, dfs(index + 1, group, jobDifficulty[index]))

          # new group 
          res = min(res, prev + dfs(index + 1, group + 1, jobDifficulty[index]))
        
          return res

        ans = dfs(0, 0, 0)

        return -1 if ans == math.inf else ans