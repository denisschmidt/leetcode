class Solution:
    def minInsertions(self, s: str) -> int:
        open = 0
        i = 0
        res = 0

        while i < len(s):
          if ch == '(':
            open+=1
          else:
            if open > 0:
              if s[i] == ')' and s[i + 1] == ')':
                open -=1
                i +=1
              else:
                res += 1
            else:
              if s[i] == ')' and s[i + 1] == ')':
                res+=1
                i+=1
              else:
                res+=2  
          i+=1      
        return res + open * 2