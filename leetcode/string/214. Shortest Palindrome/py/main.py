# Algo steps:

# The main point here found the largest palindrome substring starting from the first character
# Then reverse the remaining part as the prefix to s

class Solution:
    # Time O(N^2)
    # Space O(N)
    def shortestPalindrome(self, s):
        rev = s[::-1]
        
        for i in range(len(s)):
            if s.startswith(rev[i:]):
                return rev[:i] + s
        return s
    
    # Time O(N^2)
    # Space O(N)
    def shortestPalindrome_II(self, s):
        # largest palindrome starting from the first char
        def getLongestPalindrome(s):
          n = len(s)
          
          for endIndex in reversed(range(n)):
              left, right = 0, endIndex

              while left <= right and s[left] == s[right]:
                  left += 1
                  right -= 1

              left -= 1
              right += 1

              if left == right:
                  return endIndex

              return -1

        endIndex = getLongestPalindrome(s)

        prefix = s[endIndex+1:]

        return prefix + s
