# Time O(N)
# Space O(N)
class Solution:
    def rob(self, root):
        if not root:
          return 0

        def isLeaf(node):
          return node.left == None and node.right == None
        
        def dfs(node):
          if node == None:
            return [0, 0]

          if isLeaf(node):
            return [node.val, 0]

          l = dfs(node.left)
          r = dfs(node.right)
          
          # [current sum, max reachable sum] 
          return [node.val + l[1] + r[1], max(l) + max(r)]  
            
        return max(dfs(root))
