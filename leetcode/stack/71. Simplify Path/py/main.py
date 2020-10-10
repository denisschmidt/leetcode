class Solution:
    def simplifyPath(self, path: str) -> str:
      paths = path.split('/')
      st = []

      for p in paths:
        if p == '.' or p == '':
          continue

        if p == '..':
          if st:
            st.pop()
        else:
          st.append(p)

      res = ''

      while st:
        res = '/' + st.pop() + res

      return res if len(res) else '/'  
      