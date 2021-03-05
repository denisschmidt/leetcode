import collections


class Solution:
    # Time O(N * M) N = len(s) M = max(len(s[i]))
    # Space O(N)
    def groupStrings(self, s):
        mapping = collections.defaultdict(list)

        for i in range(len(s)):
            p = self.getPattern(s[i])
            mapping[p].append(s[i])

        return [mapping[k] for k in mapping]

    def getPattern(self, s):
        if len(s) == 1:
            return -1

        hash_pattern = ''

        for i in range(len(s) - 1):
            code1, code2 = ord(s[i]) - 26, ord(s[i + 1]) - 26
            diff = 26 - code1 + code2 if code1 > code2 else code2 - code1
            hash_pattern += str(diff)

        return hash_pattern
