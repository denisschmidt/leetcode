class Solution:
    # Since the range is 1 ~ 100_000, the biggest possible non-empty box number is 9 + 9 + 9 + 9 + 9 = 45, which corresponds to ball 99999.

    # Time O((hi - lo ) * K)
    # Space O(45)
    def countBalls(self, lowLimit, highLimit):
        mapping = [0] * 46
        res = 0

        for num in range(lowLimit, highLimit + 1):
            key = num if num < 10 else 0

            if num >= 10:
                while num > 0:
                    key += num % 10
                    num = num // 10

            mapping[key] += 1

            res = max(res, mapping[key])

        return res