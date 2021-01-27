# class Tree:
#     def __init__(self, val, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def solve(self, root, k):
        st = []

        while st or root:
            while root:
                st.append(root)
                root = root.left

            k -= 1
            root = st.pop()

            if k == -1:
                return root.val

            root = root.right

        return -1