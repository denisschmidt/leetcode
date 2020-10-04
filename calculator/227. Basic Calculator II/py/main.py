import operator

class Solution:
    def calculate(self, s: str) -> int:
      maps = {'+': 0,'-': 0,'*': 1,'/': 1}
      calculate = {
        '+': operator.add,
        '*': operator.mul,
        '-': lambda x, y: y - x,
        '/': lambda x, y: int(y / x) 
      }

      opers, nums, i = [], [], 0,

      while i < len(s):
        if s[i] == ' ': 
          i += 1
          continue

        if s[i] in maps:
          while len(opers) and maps[opers[-1]] >= maps[s[i]]:
            current = calculate[opers.pop()](nums.pop(), nums.pop())
            nums.append(current)
          opers.append(s[i])
        else:
          buffer = ''
          while i < len(s) and s[i].isdigit():
            buffer += s[i]
            i += 1            
          nums.append(int(buffer))
          i -= 1
        i += 1  
                
      while len(opers):
        nums.append(calculate[opers.pop()](nums.pop(), nums.pop()))
      return nums[-1]