class Solution:
    # Time O(N)
    # Space O(1)
    def compress(self, s):
        n = len(s)
        i = 0
        index = 0

        while i < n:
            j = i + 1

            while j < n and s[i] == s[j]:
                j += 1

            cnt = j - i

            if cnt > 1:
                s[index] = s[i]
                index += 1
                for c in str(cnt):
                    s[index] = c
                    index += 1
            else:
                s[index] = s[i]
                index += 1

            i = j

        while len(s) > index:
            s.pop()