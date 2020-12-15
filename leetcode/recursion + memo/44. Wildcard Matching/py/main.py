# Time O(2 ^ min(S, P / 2))
# Space O(2 ^ min(S, P / 2))
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        memo = {}
        
        def dfs(s_index, p_index):
            if p_index >= len(p):
              return s_index >= len(s)
            
            if (s_index, p_index) in memo:
              return memo[s_index, p_index]
            
            res = False

            if p[p_index] == '*':
              if s_index < len(s):
                res = dfs(s_index + 1, p_index) or dfs(s_index, p_index + 1)
              else:
                res = dfs(s_index, p_index + 1)
            else:
              if s_index < len(s) and (s[s_index] == p[p_index] or p[p_index] == '?'):
                res = dfs(s_index + 1, p_index + 1)
              else:
                res = False

            memo[s_index, p_index] = res

            return res
        
        return dfs(0, 0)
