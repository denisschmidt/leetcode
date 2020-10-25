# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Time O(N)
# Space O(N)
class Solution:
    def diameterOfBinaryTree(self, root):
        if root is None:
            return 0
        
        ans = 0
        
        def dfs(node):
            nonlocal ans
            if node is None:
                return 0
            
            l = dfs(node.left)
            r = dfs(node.right)
            
            ans = max(ans, l + r)
            
            return max(l + 1, r + 1)
        
        dfs(root)
        
        return ans