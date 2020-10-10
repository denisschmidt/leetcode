# class Tree:
#     def __init__(self, val, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def solve(self, root):
        ans = []
        
        def dfs(node):
            if node == None:
                return
            dfs(node.left)
            ans.append(node.val)
            dfs(node.right)
            
        dfs(root)
        
        return ans
            