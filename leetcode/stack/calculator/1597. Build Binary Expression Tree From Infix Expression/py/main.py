
# Definition for a binary tree node.
# class Node(object):
#     def __init__(self, val=" ", left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Time O(N)
# Space O(N)
class Solution:
    def expTree(self, s: str) -> 'Node':
      maps = {'+': 0,'-': 0,'*': 1,'/': 1, '(': -1}
      opStack = []
      nodes = []
      i = 0

      while i < len(s):
        if s[i] == ' ': 
          i += 1
          continue
        
        if s[i] == '(':
          opStack.append('(')
        
        elif s[i] == ')':
          while opStack[-1] != '(':
            newNode = self.applyOperator(opStack.pop(), nodes.pop(), nodes.pop())
            nodes.append(newNode)
          opStack.pop()

        elif s[i] in maps:
          while len(opStack) and maps[opStack[-1]] >= maps[s[i]]:
            newNode = self.applyOperator(opStack.pop(), nodes.pop(), nodes.pop())
            nodes.append(newNode)
          opStack.append(s[i])
            
        else:
          buf = ''
          while i < len(s) and s[i].isdigit():
            buf += s[i]
            i += 1      
          i -= 1
          newNode = Node(buf) 
          nodes.append(newNode)
        
        i += 1

      while len(opStack):
        newNode = self.applyOperator(opStack.pop(), nodes.pop(), nodes.pop())
        nodes.append(newNode)

      return nodes.pop()

    def applyOperator(self, oper, node1, node2):
      newNode = Node(oper)
      newNode.left = node2
      newNode.right = node1
      return newNode

