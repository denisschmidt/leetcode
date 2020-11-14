import math
from functools import lru_cache

class Solution:
    def palindromePartition(self, s: str, k: int) -> int:
      @lru_cache(None)
      def dfs(index, group):
        if index >= len(s):
          if group == k:
            return 0
          return math.inf

        if group > k:
          return math.inf
        
        res = math.inf

        for i in range(index, len(s)):
          cnt = self.get_cnt_make_palindrome(s, index, i)
          res = min(res, cnt + dfs(i + 1, group + 1))
        
        return res

      return dfs(0, 0)

    def get_cnt_make_palindrome(self, str, left, right):
      cnt = 0
      while left < right:
        if str[left] != str[right]:
          cnt += 1
        left += 1
        right -= 1
      return cnt
