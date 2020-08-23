from collections import defaultdict

class Solution:
    def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:
      start, end, cnt = 0, 0, 0
      maxLen = 0
      hashmap = defaultdict()

      for ch in s:
        hashmap[ch] = 0
    
      while end < len(s):
        if hashmap[s[end]] == 0:
          cnt += 1
        hashmap[s[end]] += 1
        end += 1

        while cnt > k:
          if hashmap[s[start]] == 1:
            cnt -=1
          hashmap[s[start]] -= 1
          start += 1
          
        if maxLen < end - start:
          maxLen = end - start

      return maxLen    
        