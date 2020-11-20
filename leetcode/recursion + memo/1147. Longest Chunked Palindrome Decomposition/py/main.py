
# Time O(N)
# Space O(N)
class Solution:
    def longestDecomposition(self, text):
        cache = {}
        
        def dfs(text):
          size = len(text)
        
          if size == 0:
                return 0
            
          if size == 1:
                return 1 
            
          if text in cache:
            return cache[text]
        
          res = 1
        
          for k in range(size // 2):
            if text[0:k + 1] == text[size - k - 1:size]:
              res = max(res, 2 + dfs(text[k + 1:size - k - 1]))
          
          cache[text] = res;  
        
          return res

        return dfs(text)