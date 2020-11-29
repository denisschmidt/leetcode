class Solution:
    def isValid(self, input):
        st = []
        oper_list = ['(', '[', '{']
        revert_oper = { '(': ')', '[': ']', '{': '}' }

        for ch in input:
          if ch in oper_list:
            st.append(revert_oper[ch])
          else:
            if not st or st[-1] != ch:
              return False
            st.pop()
                    
        return not st
