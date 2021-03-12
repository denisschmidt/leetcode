import collections


class Solution:
    # Time O(N * 2 ^ (N - 1))
    # Space O(N)
    def removeInvalidParentheses(self, s: str):
        ans = []
        visited = set()
        queue = collections.deque([s])
        max_length = 0
        visited.add(s)

        while queue:
            size = len(queue)

            for _ in range(size):
                current = queue.popleft()

                if max_length > 0 and len(current) < max_length:
                    return ans

                if self.is_palidrome(current):
                    ans.append(current)
                    max_length = len(current)

                for i in range(len(current)):
                    new_str = current[:i] + current[i + 1:]

                    if new_str not in visited:
                        visited.add(new_str)
                        queue.append(new_str)

        return ans

    def is_palidrome(self, s):
        open = 0
        for c in s:
            if c == '(':
                open += 1
            elif c == ')':
                if open > 0:
                    open -= 1
                else:
                    return False
        return open == 0