# Time: O (N ^2 * 2 ^ N)
# Space O(N)
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        ans = []
        
        def dfs(index, stack):
            if index >= len(s):
                ans.append(list(stack))
                return
            
            for i in range(index, len(s)):
                if not self.is_palindrome(s, index, i):
                    continue
                
                stack.append(s[index:i + 1]) # append new str
                
                dfs(i + 1, stack)
                                
                stack.pop()    
        
        dfs(0, [])
        
        return ans
                
    def is_palindrome(self, str, left, right):
        while left < right:
            if str[left] != str[right]:
                return False
            left += 1
            right -= 1
        return True
            