class Solution:
    # Time O(N)
    # Space O(N)
    def lowestCommonAncestor(self, root, p, q):
        if not root:
            return None

        def dfs(node):
            if node is None:
                return None

            if node == p or node == q:
                return node

            left = dfs(node.left)
            right = dfs(node.right)

            if left and right:
                return node

            return left or right

        return dfs(root)

    # Time O(N)
    # Space O(N)
    def lowestCommonAncestor_II(self, root, p, q):
        # Stack for tree traversal
        st = [root]

        # Dictionary for parent pointers
        mapping = {root.val: None}

        # Iterate until we find both the nodes p and q
        while p.val not in mapping or q.val not in mapping:
            node = st.pop()

            # While traversing the tree, keep saving the parent pointers.
            if node.left:
                mapping[node.left.val] = node
                st.append(node.left)
            if node.right:
                mapping[node.right.val] = node
                st.append(node.right)

        ancestors = set()

        # Process all ancestors for node p using parent pointers.
        while p:
            ancestors.add(p)
            p = mapping[p.val]

        # The first ancestor of q which appears in
        # p's ancestor set() is their lowest common ancestor.
        while q not in ancestors:
            q = mapping[q.val]

        return q
