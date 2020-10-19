# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestZigZag(self, root):   
        ans = 0
        
        def dfs(node):
          nonlocal ans  
          if not node:
            return [0, 0]

          _, r = dfs(node.left)
          l, _ = dfs(node.right)

          ans = max(ans, r + 1, l + 1)

          return [r + 1, l + 1]
        
        dfs(root)

        return ans - 1

