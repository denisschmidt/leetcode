# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def generateTrees(self, n: int) -> List[TreeNode]:
    if n == 0:
        return []
    return self.dfs(1, n)

  def dfs(self, start, end):
    if start > end:
      return [None]

    allTrees = []

    for i in range(start, end + 1):
      left = self.dfs(start, i - 1)
      right = self.dfs(i + 1, end)

      for l in left:
        for r in right:
          node = TreeNode(i)
          node.left = l
          node.right = r
          allTrees.append(node)

    return allTrees       