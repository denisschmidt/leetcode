import math

# class Tree:
#     def __init__(self, val, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
      self.ans = -math.inf

    def solve(self, root):
      self.dfs(root)

      return 0 if self.ans == -math.inf else self.ans
    
    def dfs(self, node):
        if node == None:
            return [math.inf, -math.inf]

        if self.isLeaf(node):
          return [node.val, node.val]

        left_min, left_max = self.dfs(node.left);
        right_min, right_max = self.dfs(node.right)

        cur_min = min(left_min, right_min)
        cur_max = max(left_max, right_max)

        self.ans = max(self.ans, abs(node.val - cur_min), abs(node.val - cur_max))

        cur_min = min(cur_min, node.val)
        cur_max = max(cur_max, node.val)

        return [cur_min, cur_max]

    def isLeaf(self, node):
      return node.left == None and node.right == None