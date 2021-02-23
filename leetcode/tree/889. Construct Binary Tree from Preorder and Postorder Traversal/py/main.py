# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    # Time O(N)
    # Space O(N)
    def constructFromPrePost(self, pre: List[int],
                             post: List[int]) -> TreeNode:
        # root-left-right
        # left-right-root

        root = TreeNode(pre[0])
        n = len(pre)

        # init the stack and the vistied state
        st = [root]
        visited = set([pre[0], None])

        mappingPre = {pre[n - 1]: None}
        mappingPost = {post[0]: None}

        for i in range(n - 1):
            mappingPre[pre[i]] = pre[i + 1]
            mappingPost[post[n - i - 1]] = post[n - i - 2]

        while st:
            node = st.pop()

            left = mappingPre[node.val]
            right = mappingPost[node.val]

            if left not in visited:
                node.left = TreeNode(left)
                st.append(node.left)
                visited.add(left)

            if right not in visited:
                node.right = TreeNode(right)
                st.append(node.right)
                visited.add(right)

        return root