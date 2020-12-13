
class Solution:
    def isMatch(self, s, p):
        memo = {}

        def dfs(s_index, p_index):
          if p_index >= len(p):
            return s_index >= len(s)

          if (s_index, p_index) in memo:
            return memo[s_index, p_index]

          is_valid = s_index < len(s) and (s[s_index] == p[p_index] or p[p_index] == '.')

          if p_index <= len(p) - 2 and p[p_index + 1] == '*':
            if is_valid:
              res = dfs(s_index + 1, p_index) or dfs(s_index, p_index + 2)
              memo[s_index, p_index] = res
              return res
            else:
              res = dfs(s_index, p_index + 2) 
              memo[s_index, p_index] = res
              return res
          else:
            if is_valid:
              res = dfs(s_index + 1, p_index + 1)
              memo[s_index, p_index] = res
              return res

            memo[s_index, p_index] = False  
            return False

        return dfs(0, 0)
