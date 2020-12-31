# Top - Down 
# DFS + Memo
class Solution:
    def minCut(self, s: str) -> int:
        n = len(s)

        # Double memo 
        dp = [None] * n 
        dp_is_palindrome = [[None] * n for _ in range(n)]
        
        def is_palindrome(i, j):
            if i >= j:
                return True
            if dp_is_palindrome[i][j] != None:
                return dp_is_palindrome[i][j]
            
            if s[i] == s[j] and is_palindrome(i+1, j-1):
                dp_is_palindrome[i][j] = True
                return True
            
            dp_is_palindrome[i][j] = False
            
            return False
        
        def dfs(index):
            if index >= len(s):
                return 0
            
            if dp[index] != None:
                return dp[index]

            res = float('inf')

            for i in range(index, len(s)):
                if is_palindrome(index, i):
                    res = min(res, 1 + dfs(i + 1))
            
            dp[index] = res
            
            return res
            
        ans = dfs(0) - 1
        
        return 0 if ans == float('inf') else ans
