class Solution:
    def minSteps(self, n):
      def dfs(strLen, copyLen):
        if strLen > n:
          return float('inf')
        
        if strLen == n:
          return 0

        if copyLen == 0:
          return 2 + dfs(2 * strLen, strLen)
        else:
          return min(1 + dfs(strLen + copyLen, copyLen), 2 + dfs(2 * strLen, strLen))  
        
      if n <= 1:
        return 0

      return dfs(1, 0)