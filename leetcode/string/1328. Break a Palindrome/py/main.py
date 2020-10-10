class Solution:
    def breakPalindrome(self, palindrome):
      if len(palindrome) == 1:
        return ''
      
      n = len(palindrome)

      for i in range(n):
        if palindrome[i] != 'a':
          if n % 2 != 0 and i == int(n / 2):
            continue
          return palindrome[:i] + 'a' + palindrome[i + 1:]

      return palindrome[:-1] + 'b'

