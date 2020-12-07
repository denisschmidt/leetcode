class Solution:
    def videoStitching(self, clips, T):
        inf = float('inf')
        
        memo = {} 
        
        def dfs(current):
          if current >= T:
            return 0
            
          if current in memo:
            return memo[current]
            
          res = inf

          for clip in clips:
            if current >= clip[0] and current < clip[1]:
              res = min(res, 1 + dfs(clip[1]))
            
          memo[current] = res    
        
          return res

        ans = dfs(0)

        return -1 if ans == inf else ans