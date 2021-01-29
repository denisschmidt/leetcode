class Solution:
    def minCharacters(self, a: str, b: str) -> int:
        # Time O(A + B)
        # Space O(1)
        def getReplaceCount(a, b):
            res = float('inf')

            for i in range(25):
                current_char = chr(i + 97)

                replace_cnt = 0

                for i in range(len(a)):
                    if a[i] > current_char:
                        replace_cnt += 1

                for i in range(len(b)):
                    if b[i] <= current_char:
                        replace_cnt += 1

                res = min(res, replace_cnt)

            return res

        count = {}
        max_freq = 0
        for ch in a:
            count[ch] = count.get(ch, 0) + 1

        for ch in b:
            count[ch] = count.get(ch, 0) + 1
            max_freq = max(max_freq, count[ch])

        # 3 condition
        total_chars = len(a) + len(b)

        return min(total_chars - max_freq, getReplaceCount(a, b),
                   getReplaceCount(b, a))
