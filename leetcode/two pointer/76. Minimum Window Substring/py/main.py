import collections
import math


class Solution:
    # Time O(N)
    # Space O(N)
    def minWindow(self, s, t):
        count = collections.Counter(t)

        start, end = 0, 0
        k = len(count)
        minIndex = math.inf
        minLen = math.inf

        while end < len(s):
            if count[s[end]] == 1:
                k -= 1

            count[s[end]] -= 1
            end += 1

            while k == 0:
                if minLen > end - start:
                    minLen = end - start
                    minIndex = start

                if count[s[start]] == 0:
                    k += 1

                count[s[start]] += 1
                start += 1

        return '' if minLen == math.inf else s[minIndex:minIndex + minLen]
