class Solution:
    def validPalindrome(self, s):
        n = len(s)

        def dfs(lo, hi):
            while lo < hi:
                if s[lo] != s[hi]:
                    return False
                lo += 1
                hi -= 1

        for i in range(n):
            if s[i] != s[n - 1 - i]:
                j = n - 1 - i
                return dfs(i + 1, j) or dfs(i, j - 1)

        return True