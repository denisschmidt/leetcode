class Solution:
    # Time O(N)
    # Space O(N)
    def rangeSumBST(self, root: TreeNode, L: int, R: int) -> int:
        def dfs(node):
            if not node:
                return 0

            if R < node.val:
                return dfs(node.left)
            elif L > node.val:
                return dfs(node.right)
            else:
                # Value exsist in the range
                # Therefore, the next value could be both on the left and on the right sides
                # We need to scan left and right ranges
                return dfs(node.left) + node.val + dfs(node.right)

        return dfs(root)
