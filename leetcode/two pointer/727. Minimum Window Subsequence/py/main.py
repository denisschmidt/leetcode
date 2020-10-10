import math

# Time O(N*M)
# Space O(1)
class Solution:
    def minWindow(self, S, T):
      end = 0
      minIndex = math.inf
      minLen = math.inf

      while end < len(S):
        tIndex = 0
        while end < len(S) and tIndex < len(T):
          if S[end] == T[tIndex]:
            tIndex += 1
          if tIndex == len(T):
            break
          end += 1

        start = end
        tIndex = len(T) - 1
        
        if end == len(S):
            break
        
        while start >= 0:
          if S[start] == T[tIndex]:
            tIndex -= 1

          if tIndex < 0:
            break
          start -= 1

        if minLen > end - start + 1:
          minLen = end - start + 1
          minIndex = start

        end = start + 1

      return '' if minLen == math.inf else S[minIndex:minIndex + minLen]