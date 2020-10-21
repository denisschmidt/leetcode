# Time O(N)
# Space O(N)
class Solution:
    def maxPathSum(self, root):
      if root is None:
        return 0
        
      ans = -float('inf')
      
      def dfs(node):
        nonlocal ans
        if node is None:
          return 0

        l = dfs(node.left)
        r = dfs(node.right)

        ans = max(ans, l + node.val, r + node.val, l + r + node.val, node.val)

        return max(l + node.val, r + node.val, 0)

      dfs(root)

      return ans