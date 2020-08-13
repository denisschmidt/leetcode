# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
      super().__init__()
      self.res = None
      self.diff = float('inf')

    def closestValue(self, root, target):
      self.dfs(root, target)
      return self.res

    def dfs(self, node, target):
      if node == None:
        return None

      if self.diff > abs(node.val - target):
        self.diff = abs(node.val - target)
        self.res = node.val

      if node.val > target:
        self.dfs(node.left, target)
      else:
        self.dfs(node.right, target)  
