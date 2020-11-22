from functools import lru_cache

# Time O(N^3) 
# dp takes O(k*n*n), because dp(k, i) has total k*n states, each state need a for loop up to n elements.

# Space O(N^2)
class Solution:
    def minDistance(self, houses, k):
        inf = 10**9
        N = len(houses)
     
        if N == k:
          return 0

        houses.sort()
        
        # costs[i][j] is the cost to put a mailbox among houses[i:j], the best way is put the mail box at median position among houses[i:j]
        costs = [[0]* N for _ in range(N)]

        for i in range(N):
          for j in range(N):
            median = houses[(i + j) // 2]

            for t in range(i, j + 1):
              costs[i][j] += abs(median - houses[t]) 
        
        @lru_cache(None)
        def dfs(index, k):
          if k == 0 and index == N:
            return 0

          if k == 0 or index == N:
            return inf

          ans = inf

          for j in range(index, N):
            cost = costs[index][j] # Try to put a mailbox among house[i:j]
            ans = min(ans, cost + dfs(j + 1, k - 1))

          return ans

        return dfs(0, k)
