class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        st = []
        removed = set()

        for i, ch in enumerate(s):
          if ch == '(':
            st.append(i)
          elif ch == ')':
            if len(st) == 0:
              removed.add(i)
            else:
              st.pop()
        
        while len(st):
          removed.add(st.pop())

        res = ''

        for i, ch in enumerate(s):
          if i not in removed:
            res += ch

        return res