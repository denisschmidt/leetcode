# Top - Down 
# DFS + Memo
class Solution:
    def minCut(self, s: str) -> int:
        n = len(s)
        dp = [None] * n
        dp_is_palindrome = [[None] * n for _ in range(n)]
            
        def is_palindrome(left, right):
            if left >= right:
                return True
            
            if dp_is_palindrome[left][right] != None:
                return dp_is_palindrome[left][right]

            if s[left] == s[right] and is_palindrome(left + 1, right - 1):
              dp_is_palindrome[left][right] = True
              return True

            dp_is_palindrome[left][right] = False
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
