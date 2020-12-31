# Time O(N)
# Space O(N)
class Solution:
    def removeLeafNodes(self, root: TreeNode, target: int) -> TreeNode:
        if not root:
          return root

        def isLeaf(node):
          return node.left == None and node.right == None

        def dfs(node):
          if node == None:
            return None

          node.left = dfs(node.left)
          node.right = dfs(node.right)

          if isLeaf(node) and node.val == target:
            return None

          return node
        
        return dfs(root)