# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
      def dfs(lo, hi):
          nonlocal pre_idx
          if lo >= hi:
              return None

          val = preorder[pre_idx]  
          node = TreeNode(val)
          
          # val splits inorder list
          # into left and right subtrees
          mid = idx_map[val]
        
          # recursion
          pre_idx += 1  

          # build left subtree
          node.left = dfs(lo, mid)        
          # build right subtree
          node.right = dfs(mid + 1, hi)

          return node
                  
      pre_idx = 0

      idx_map = {val:idx for idx, val in enumerate(inorder)}  

      return dfs(0, len(preorder))
