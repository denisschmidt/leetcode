class Solution:
    # Time O(N)
    # Space O(N)
    def buildTree(self, inorder: List[int], postorder: List[int]) -> TreeNode:
        # inorder -> left-root-right
        # postorder -> left-right-root
        n = len(postorder)
        index = n - 1

        mapping = {val: idx for idx, val in enumerate(inorder)}

        def dfs(lo, hi):
            nonlocal index

            if lo > hi:
                return None

            val = postorder[index]
            node = TreeNode(val)
            mid = mapping[val]
            index -= 1

            node.right = dfs(mid + 1, hi)
            node.left = dfs(lo, mid - 1)

            return node

        return dfs(0, n - 1)