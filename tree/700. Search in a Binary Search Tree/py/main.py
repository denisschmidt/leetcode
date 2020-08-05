# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        super().__init__()
        self.ans = None

    def searchBST(self, root, val):
      if root == None or val == root.val:
        return root
      self.dfs(root, val)
      return self.ans  

    def dfs(self, node, target):
      if node == None:
        return
      if node.val == target:
        self.ans = node
        return 
      if target > node.val:
        self.dfs(node.right, target)
      if target < node.val:
        self.dfs(node.left, target)
