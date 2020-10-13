from collections import deque

# class Tree:
#     def __init__(self, val, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def solve(self, root):
        if root == None:
            return []
        queue = deque()
        res = []

        queue.append(root)
        
        while queue:
            node = queue.popleft()

            res.append(node.val)

            if node.left:
              queue.append(node.left)
            if node.right:
              queue.append(node.right)
        
        return res