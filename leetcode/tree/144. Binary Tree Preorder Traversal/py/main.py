# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Time O(N)
# Space O(N)
class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        st = []
        ans = []
        st.append(root)
        
        while len(st):
            node = st.pop()
            
            if node is not None:
                ans.append(node.val) 
                st.append(node.right)
                st.append(node.left)
                
        return ans