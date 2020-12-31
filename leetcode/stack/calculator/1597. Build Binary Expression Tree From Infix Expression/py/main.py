
# Definition for a binary tree node.
# class Node(object):
#     def __init__(self, val=" ", left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Time O(N)
# Space O(N)

class Solution:
    def expTree(self, s):
        opersPrior = {'+': 0,'-': 0,'*': 1,'/': 1, '(': -1}
        
        numsStack, opersStack = [], []
        i = 0

        while i < len(s):
          if s[i] == '(':
              opersStack.append(s[i])
          
          elif s[i] == ')':
              while opersStack[-1] != '(':
                numsStack.append(self.applyOper(opersStack.pop(), numsStack.pop(), numsStack.pop()))
            
              # remove "(" from the stack
              opersStack.pop()
          
          elif s[i] in opersPrior:
              while opersStack and opersPrior[opersStack[-1]] >= opersPrior[s[i]]:
                numsStack.append(self.applyOper(opersStack.pop(), numsStack.pop(), numsStack.pop()))
                          
              opersStack.append(s[i])
          
          else:
            buf = ''

            while i < len(s) and s[i].isdigit():
                buf += s[i]
                i += 1
                
            numsStack.append(Node(buf))

            i-= 1
            
          i += 1
                
        while opersStack:
            numsStack.append(self.applyOper(opersStack.pop(), numsStack.pop(), numsStack.pop()))
                
        return numsStack[-1]

    def applyOper(self, oper, num1, num2):
      return Node(oper, num2, num1)