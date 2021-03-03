class Solution:
    # Time O(N)
    # Space O(N)
    def maxPathSum(self, root: TreeNode) -> int:
        def dfs(node):
            if node is None:
                return 0

            L = dfs(node.left)
            R = dfs(node.right)

            current = 0

            if L > 0:
                current += L

            if R > 0:
                current += R

            self.ans = max(self.ans, node.val + current)

            return node.val + max(L, R, 0)

        self.ans = -float('inf')
        dfs(root)

        return self.ans
