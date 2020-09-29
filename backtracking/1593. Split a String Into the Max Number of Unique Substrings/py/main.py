class Solution:
    def __init__(self):
      self.res = 0

    def maxUniqueSplit(self, s: str) -> int:
        def dfs(index, pairs):
          if index >= len(s):
            self.res = max(self.res, len(pairs))
            return
          
          for i in range(index + 1, len(s) + 1):
            newStr = s[index:i]
            if newStr in pairs: continue
            pairs.add(newStr)
            dfs(i, pairs)
            pairs.remove(newStr)    

        dfs(0, set())
        
        return self.res