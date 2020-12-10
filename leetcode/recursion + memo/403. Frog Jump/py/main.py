# Time O(N^3)
# Space O(N^2)
class Solution:
    def canCross(self, stones):
        N = len(stones)

        memo = {}

        def dfs(start, end, index):
          if index > N:
            return False

          if index == N - 1:
            return True

          if (start, end, index) in memo:
            return memo[start, end, index]

          for i in range(index + 1, N):
            dist = stones[i] - stones[index]
            
            if dist >= start and dist <= end:
                if dfs(dist - 1, dist + 1, i):  
                    memo[start, end, index] = True
                    return True
           
          memo[start, end, index] = False

          return False

        return dfs(0, 1, 0)
