import collections


class Solution:
    # Time O(S)
    # Space (P)
    def findAnagrams(self, s, p):
        count = collections.Counter(p)

        start, end = 0, 0
        k = len(count)
        ans = []

        while end < len(s):
            if s[end] in count:
                if count[s[end]] == 1:
                    k -= 1
                count[s[end]] -= 1
            end += 1

            while k == 0:
                if end - start == len(p):
                    ans.append(start)

                if s[start] in count:
                    if count[s[start]] == 0:
                        k += 1
                    count[s[start]] += 1
                start += 1

        return ans