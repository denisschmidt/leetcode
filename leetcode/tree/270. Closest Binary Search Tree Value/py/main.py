class Solution:
    # Time O(H)
    # Space O(H)
    def closestValue(self, root: TreeNode, target: float) -> int:
        def dfs(node):
            if node is None:
                return

            if abs(node.val - target) < self.min:
                self.min = abs(node.val - target)
                self.ans = node

            if node.val > target:
                dfs(node.left)
            elif node.val < target:
                dfs(node.right)
            else:
                self.min = 0
                self.ans = node

        self.min = float('inf')
        self.ans = None

        dfs(root)

        return self.ans