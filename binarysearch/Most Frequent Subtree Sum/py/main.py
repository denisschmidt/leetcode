import collections

# class Tree:
#     def __init__(self, val, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def solve(self, root):
      ans = None
      max_freq = 0
      count = collections.Counter()
      
      def dfs(node):
          nonlocal max_freq, ans
          if node is None:
              return 0
                  
          l = dfs(node.left)
          r = dfs(node.right)
          
          s = l + r + node.val

          count[s] += 1
      
          if count[s] >= max_freq:
              max_freq = count[s]
              ans = s
    
          return s
      
      dfs(root)

      return ans