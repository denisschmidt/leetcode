class Solution:
  def letterCombinations(self, digits):
      def dfs(index, comb):
        if index == len(digits):
          res.append(comb)
          return

        for ch in phone[digits[index]]:
          dfs(index + 1, comb + ch)
      
      if len(digits) == 0:
        return []
        
      phone = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
      }

      res = []

      dfs(0, '')

      return res