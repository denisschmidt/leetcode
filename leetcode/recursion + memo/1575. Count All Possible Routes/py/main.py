class Solution:
    def countRoutes(self, locations, start, finish, fuel):
        n = len(locations)
        mod = 1e9 + 7
        dp = {}

        def dfs(current_index, target_index, fuel):
          if fuel == 0 and current_index == target_index:
            return 1

          if fuel < 0:
            return 0

          key = str([current_index, fuel])

          if key in dp:
            return dp[key]

          res = 0
          for i in range(n):
            rest_fuel = fuel - abs(locations[i] - locations[current_index])

            if i == current_index or rest_fuel < 0:
              continue

            if i == target_index and rest_fuel > 0:
              res += 1 + dfs(i, target_index, rest_fuel)
            else:
              res += dfs(i, target_index, rest_fuel)

            res %= mod

          dp[key] = res

          return res
        
        ans = dfs(start, finish, fuel)

        if start == finish:
          ans += 1

        return int(ans)
