# Time O(M × N) - where M and N represent the lengths of the two strings. 
# Space O(M × N)
class Solution:
    def numDistinct(self, str, target):
        memo = {}

        def dfs(s_index, t_index):
            if s_index == len(str):
              return 1 if t_index == len(target) else 0

            if t_index == len(target):
              return 1

            if (s_index, t_index) in memo:
              return memo[s_index, t_index]

            res = 0

            if str[s_index] == target[t_index]:
              res += dfs(s_index + 1, t_index + 1)
              res += dfs(s_index + 1, t_index)
            else:
              res += dfs(s_index + 1, t_index)
            
            memo[s_index, t_index] = res

            return res

        return dfs(0, 0)