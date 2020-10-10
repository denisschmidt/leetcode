# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def deleteNode(self, root, key):
      if root == None: 
        return None

      if key > root.val:
        root.right = self.deleteNode(root.right, key)
      elif key < root.val:
        root.left = self.deleteNode(root.left, key)
      else:
        if self.isLeaf(root):
          return None
        if root.right:
          succ = self.getSuccessor(root)
          root.val = succ.val
          root.right = self.deleteNode(root.right, root.val)
          return root
        if root.left:
          pre = self.getPredecessor(root)
          root.val = pre.val
          root.left = self.deleteNode(root.left, root.val)
          return root    
      return root    

    def isLeaf(self, root):
      return root.left == None and root.right == None

    def getSuccessor(self, root):
      root = root.right
      while (root.left != None):
        root = root.left
      return root  

    def getPredecessor(self, root):
      root = root.left
      while (root.right != None):
        root = root.right
      return root  

        