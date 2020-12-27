class Solution:
    # Time O(N^2)
    # Space O(N^2)
    def longestPalindrome(self, s):
        n = len(s)
        dp = [[False] * n for _ in range(n)]
        maxLen = 1 # Min palindrome equals 1 char
        startIndex = 0

        for i in range(n):
          dp[i][i] = True

        for length in range(1, n):
          for i in range(n - length):
            j = i + length
                        
            if s[i] == s[j]:
              dp[i][j] = True if j - i == 1 else dp[i + 1][j - 1]
            
            # if it's a palindrome
            if dp[i][j] and maxLen < j - i + 1:
                maxLen = j - i + 1
                startIndex = i
                
        return s[startIndex:startIndex + maxLen]
    
    # Time O(N^2)
    # Space O(1)
    def longestPalindrome_II(self, s):
        n = len(s)
        maxLen = 1
        startIndex = 0
        
        def expandAroundCenter(i, j):
          while i >= 0 and j < n and s[i] == s[j]:
            i -= 1
            j += 1
          i += 1
          j -= 1

          return [i, j - i + 1]

        for i in range(n):
          # Palindrome can be expanded from its center, and there are only 2n − 1 such centers.
          # You might be asking why there are 2n − 1 but not n centers? 
          
          # The reason is the center of a palindrome can be in between two letters. 
          # Such palindromes have even number of letters (such as "abba") and its center are between the two 'b's.
          
          startIndex1, len1 = expandAroundCenter(i, i)

          # Even number of letters
          startIndex2, len2 = expandAroundCenter(i, i + 1) 
          
          if len1 > len2:
            if maxLen < len1:
              maxLen = len1
              startIndex = startIndex1            
          else:
            if maxLen < len2:
              maxLen = len2
              startIndex = startIndex2

        return s[startIndex: startIndex + maxLen]
            

          

