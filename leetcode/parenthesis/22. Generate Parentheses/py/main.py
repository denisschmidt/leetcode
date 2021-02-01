"""

Recursion solution.

Добавляем '(' или ')' только тогда, когда мы знаем, что это останется действительной последовательностью. 
Мы можем сделать это, отслеживая количество открывающих и закрывающих скобок.

Мы можем открыть скобку, если у нас open < n. 
Мы можем закрыть скобку, если она не будет превышать количество открывающих скобок.


"""


class Solution:
    # Time: Turns out this is the n-th Catalan number O(4^N / N * sqrt(N))
    # Time worst: O(N!)

    # Space: Aнализ сложности основан на понимании количества элементов в generateParenthesis(n)
    # This is the n-th Catalan number O(4^N / sqrt(n)) and using O(N) space to store the sequence
    def generateParenthesis(self, n):
        ans = []

        def dfs(current, open, close):
            if open + close > n * 2:
                return

            if open + close == n * 2:
                ans.append(current)
                return

            if open < n:
                dfs(current + '(', open + 1, close)

            if open > close and close < n:
                dfs(current + ')', open, close + 1)

        dfs('', 0, 0)

        return ans
