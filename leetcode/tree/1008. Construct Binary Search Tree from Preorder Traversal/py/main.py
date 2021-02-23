# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # root-left-right
    # Time O(N)
    # Space O(N)
    def bstFromPreorder(self, preorder: List[int]) -> TreeNode:
        index = 0

        def dfs(lower=float('-inf'), upper=float('inf')):
            nonlocal index

            if index >= len(preorder):
                return None

            val = preorder[index]

            if val < lower or val > upper:
                return None

            node = TreeNode(val)
            index += 1

            node.left = dfs(lower, node.val)
            node.right = dfs(node.val, upper)

            return node

        return dfs()