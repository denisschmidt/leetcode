class Solution:
    # Time O(N)
    # Space O(N)
    def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
        def dfs(node):
            if node is None:
                return 0

            if node.val < low:
                return dfs(node.right)

            elif node.val > high:
                return dfs(node.left)

            else:
                # Value exsist in the range
                # Therefore, the next value could be both on the left and on the right sides
                # We need to scan left and right ranges
                return dfs(node.left) + node.val + dfs(node.right)

        return dfs(root)
