# Time O(N)
# Space O(N)
class Solution:
    def maxPathSum(self, root: TreeNode) -> int:
        ans = -float('inf')

        def dfs(node):
          nonlocal ans

          if node == None:
            return 0

          l = dfs(node.left)
          r = dfs(node.right) 

          x = l if l > 0 else 0
          y = r if r > 0 else 0

          ans = max(ans, x + y + node.val)

          return max(max(l, r) + node.val, node.val)

        dfs(root)

        return ans
