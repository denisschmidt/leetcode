# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: TreeNode) -> int:
      if root == None:
        return 0
    
      if self.isLeaf(root):
        return 1

      left = float('inf')
      right = float('inf')

      if root.left:
        left = self.minDepth(root.left)
        
      if root.right:
        right = self.minDepth(root.right)

      return min(left, right) + 1  

    def isLeaf(self, root):
      return root.left == None and root.right == None  
