from functools import lru_cache


class Solution:
    def solve(self, s):
        @lru_cache(None)
        def dfs(s1, s2):
            if not s1 and not s2:
                return 0
            if not s1:
                return len(s2)
            if not s2:
                return len(s1)

            if s1[0] == s2[0]:
                return dfs(s1[1:], s2[1:])

            res = float('inf')

            insert = dfs(s1, s2[1:]) + 1
            delete = dfs(s1[1:], s2) + 1
            replace = dfs(s1[1:], s2[1:]) + 1

            return min(res, insert, delete, replace)

        if not s:
            return 0

        ans = float('inf')

        for index in range(len(s)):
            ans = min(ans, dfs(s[:index], s[index:]))

        return ans