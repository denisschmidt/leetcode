class Solution:
    # Assign N people with different hats - Time Limit Exceeded
    # Time O(N * 2^40 * 40)
    # Space O(N * 2^40)
    def numberWays(self, hats):
        N = len(hats)
        mod = 1e9 + 7
        memo = {}

        def dfs(peopleId, assignedHats):
          if peopleId >= N:
            return 1

          if (peopleId, assignedHats) in memo:
            return memo[peopleId, assignedHats]

          res = 0

          for idHat in hats[peopleId]:
            if (assignedHats >> idHat) & 1 == 0:
              res += dfs(peopleId + 1, assignedHats | (1 << idHat))
              res %= mod

          memo[peopleId, assignedHats] = res

          return res

        return int(dfs(0, 0))