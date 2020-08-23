# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
      self.ans = None
    
    def subtreeWithAllDeepest(self, root: TreeNode) -> TreeNode:
      if root == None or self.isLeaf(root):
        return root

      maxDepth = self.getMaxDepth(root)

      self.dfs(root, 1, maxDepth)

      return self.ans

    def dfs(self, root, depth, maxDepth):
      if root == None:
        return None

      if depth == maxDepth:
        self.ans = root    
        return root

      if self.isLeaf(root):
        return None

      L = self.dfs(root.left, depth + 1, maxDepth)    
      R = self.dfs(root.right, depth + 1, maxDepth)

      if L != None and R != None:
        self.ans = root

      return L or R  

    def getMaxDepth(self, root):
      if root == None:
        return 0

      l = self.getMaxDepth(root.left)
      r = self.getMaxDepth(root.right)       

      return max(l, r) + 1

    def isLeaf(self, root):
      return root.left == None and root.right == None  