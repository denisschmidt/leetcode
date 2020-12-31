
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        if not p:
            return len(s) == 0
        
        is_valid = s and (s[0] == p[0] or p[0] == '.')
        
        if len(p) >= 2 and p[1] == '*':
            # if our state is valid s[0] == p[0] we can continue iterate throught s or we finished with *
            return is_valid and self.isMatch(s[1:], p) or self.isMatch(s, p[2:]) 
        else:
            if is_valid:
                return self.isMatch(s[1:], p[1:])
            return False
            
    def isMatch_II(self, s, p):
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
