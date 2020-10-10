class Solution:
    def numDecodings(self, s):
        memo = {}

        def dfs(s):
            if len(s) == 0:
                return 1
            if s in memo:
                return memo[s]
            ans = 0
            for num in range(1, 27):
                if s.startswith(str(num)):
                    l = 2 if num >= 10 else 1
                    ans += dfs(s[l:])
            memo[s] = ans
            return ans

        return dfs(s)
