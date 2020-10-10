# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minCameraCover(self, root: TreeNode) -> int:
        def dfs(node):
          if node == None:
            return CAMERA_SEEN
        
          L = dfs(node.left)
          R = dfs(node.right)

          if L == CAMERA_OFF or R == CAMERA_OFF:
            self.res += 1    
            return CAMERA_ON

          if L == CAMERA_ON or R == CAMERA_ON:
            return CAMERA_SEEN

          return CAMERA_OFF  
        
        CAMERA_ON = 1
        CAMERA_OFF = 0
        CAMERA_SEEN = 2
        self.res = 0

        if root == None:
          return 0

        rootCamera = dfs(root)
        
        return self.res + 1 if rootCamera == CAMERA_OFF else self.res 
