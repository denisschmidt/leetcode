class Solution:
    # Time O(N)
    # Space O(N)
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        # root-left-right
        # left-root-right
        mapping = {}
        n = len(inorder)
        index = 0

        for i, v in enumerate(inorder):
            mapping[v] = i

        def dfs(lo, hi):
            nonlocal index

            if lo > hi:
                return None

            # val splits inorder list
            # into left and right subtrees
            val = preorder[index]

            node = TreeNode(val)
            mid = mapping[val]
            index += 1

            # build left subtree
            node.left = dfs(lo, mid - 1)

            # build right subtree
            node.right = dfs(mid + 1, hi)

            return node

        return dfs(0, n - 1)
