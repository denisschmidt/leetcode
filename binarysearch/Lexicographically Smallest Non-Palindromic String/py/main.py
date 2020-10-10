class Solution:
    def solve(self, s):
        chars = list(s)
        n = len(s)

        for i, ch in enumerate(chars):
          if ch != 'a':
            if n % 2 != 0 and i == int(n / 2): 
              continue 
            else:
              chars[i] = 'a'
              return ''.join(chars)

        chars[-1] = 'b' if chars[-1] == 'a' else 'a'

        return ''.join(chars)