# Time O(N)
# Space O(N)
class Solution:
    def pathSum(self, root, target):
        if not root:
            return []
        
        def isLeaf(node):
            return not node.left and not node.right
        
        ans = []
  
        def dfs(node, target, comb):
          if node == None:
            return
          
          comb.append(node.val)
        
          if isLeaf(node) and target - node.val == 0:
            ans.append(list(comb))
            comb.pop()
            return

          dfs(node.left, target - node.val, comb)
          dfs(node.right, target - node.val, comb)
            
          comb.pop()

        dfs(root, target, [])
                
        return ans