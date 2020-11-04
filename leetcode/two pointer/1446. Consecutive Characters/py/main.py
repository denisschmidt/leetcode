# Time O(N)
# Space O(1)
class Solution:
    def maxPower(self, s: str) -> int:
        k, lo, hi, max_len = 0, 0, 0, 0
        memo = {}

        for x in s:
          memo[x] = 0

        while hi < len(s):
          if memo[s[hi]] == 0:
            k += 1

          memo[s[hi]] += 1
          hi += 1

          while k > 1:
            if memo[s[lo]] == 1:
              k -= 1

            memo[s[lo]] -= 1
            lo += 1

          max_len = max(max_len, hi - lo)

        return max_len