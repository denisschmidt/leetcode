class Solution:
    def maxJumps(self, arr, d):
      n = len(arr)
      ans = 0
      dp = [None] * n      
    
      def dfs(index):
        if index >= n or index < 0:
          return 0

        if dp[index] != None:
            return dp[index]
        
        res = 0

        i = index - 1
        # get max left dist
        while i >= index - d and i >= 0 and arr[i] < arr[index]:
          i -= 1

        for k in range(i + 1, index):
          res = max(res, 1 + dfs(k))

        i = index + 1
        # get max right dist
        while i <= index + d and i < n and arr[index] > arr[i]:
          i += 1

        for k in range(index + 1, i):
          res = max(res, 1 + dfs(k))
            
        dp[index] = res
        
        return res

      for i in range(n):
        ans = max(ans, dfs(i) + 1)

      return ans 
