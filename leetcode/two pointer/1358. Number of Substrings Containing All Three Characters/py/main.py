# Time O(N)
# Space O(1)
class Solution:
    def numberOfSubstrings(self, s):
      res, start, end = 0, 0, 0
      count = { c: 0 for c in 'abc' }

      while end < len(s):
        count[s[end]] += 1
        end += 1

        while all(count.values()):
          res += len(s) - end + 1
          count[s[start]] -= 1
          start += 1
      
      return res

