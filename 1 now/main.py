from typing import Mapping


class Solution:
    def countBalls(self, lowLimit, highLimit):
        mapping = {}
        res = 0

        for num in range(lowLimit, highLimit + 1):
            key = num if num < 10 else 0

            while num > 0:
                key += num % 10
                num = num // 10

            mapping[key] = mapping.get(key, 0) + 1

            res = max(res, mapping[key])

        return res


x = Solution()

print(x.countBalls(5, 15))