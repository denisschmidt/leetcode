# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def binaryTreePaths(self, root: TreeNode) -> List[str]:
        def dfs(node, path):
            if node is None:
                return

            val = str(node.val)

            if not node.left and not node.right:
                suffix = '->' + val if len(path) else val
                self.ans.append('->'.join(path) + suffix)
                return

            path.append(val)
            dfs(node.left, path)
            path.pop()

            path.append(val)
            dfs(node.right, path)
            path.pop()

        self.ans = []

        dfs(root, [])

        return self.ans
