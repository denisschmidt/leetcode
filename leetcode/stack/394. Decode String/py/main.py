class Solution:
    def decodeString(self, s: str) -> str:
      countStack = []
      stack = []
      curStr = ''
      curNum = 0

      for ch in s:
        if ch == '[':
          stack.append(curStr)
          stack.append(curNum)
          curStr = ''
          curNum = 0
        elif ch == ']':
          num = stack.pop()
          prevStr = stack.pop()
          curStr = prevStr + curStr * num
        elif ch.isdigit():
          curNum = curNum * 10 + int(ch)
        else:
          curStr += ch  

      return curStr    
