""" 
  Time O(N)
  Space O(1)
"""
class Solution:
    def longestValidParentheses(self, s):
      close = 0
      open = 0
      maxLen = 0

      for ch in s:
        if ch == '(':
          open += 1
        else:
          close += 1

        if open == close:
          maxLen = max(maxLen, 2 * open)
        elif close >= open:
          close = open = 0


      open = close = 0

      for ch in reversed(s):
        if ch == '(':
          open += 1
        else:
          close += 1  

        if open == close:
          maxLen = max(maxLen, 2 * open)
        elif open >= close:
          close = open = 0

      return maxLen    
