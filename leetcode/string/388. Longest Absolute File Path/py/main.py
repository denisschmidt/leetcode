class Solution:
    def lengthLongestPath(self, input: str) -> int:
      paths = input.split('\n')
      map = { -1: 0 }
      res = 0

      for path in paths:
        lvl = path.count('\t')

        map[lvl] = map[lvl - 1] + len(path) - lvl
        
        if path.count('.'):
          res = max(res, map[lvl] + lvl)

      return res    
        
