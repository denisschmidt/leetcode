class Solution:
    def countSteppingNumbers(self, low: int, high: int) -> List[int]:
        def dfs(num):
            if num > high:
                return
            if num >= low and num <= high:
                res.append(num)

            for i in range(10):
                if abs((num % 10) - i) != 1:
                    continue
                dfs(num * 10 + i)
        res = []

        if low == 0:
            res.append(0)

        for i in range(1, 10):
            dfs(i)

        return sorted(res)
