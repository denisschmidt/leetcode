class Solution:
    # Time O(N)
    # Space O(N)
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode',
                             q: 'TreeNode') -> 'TreeNode':
        def dfs(node):
            if node is None:
                return None

            if node.val > p.val and node.val > q.val:
                return dfs(node.left)

            if node.val < p.val and node.val < q.val:
                return dfs(node.right)

            return node

        return dfs(root)