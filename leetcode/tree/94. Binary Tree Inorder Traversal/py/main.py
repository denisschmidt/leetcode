# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Time O(N)
# Space O(N)
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        st, ans = [], []
        node = root

        while st or node:
          while node:
            st.append(node)
            node = node.left

          node = st.pop()
          ans.append(node.val)
          node = node.right
          
        return ans