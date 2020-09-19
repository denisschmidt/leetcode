class Solution:
    def __init__(self):
      self.LEFT = 0
      self.RIGHT = 0

    def btreeGameWinningMove(self, root, n, x):
      def isLeaf(node):
        return node.left == None and node.right == None

      def dfs(node):
        if node == None:
          return 0

        if isLeaf(node):
          return 1

        l = dfs(node.left)
        r = dfs(node.right)
        
        if node.val == x:
          self.LEFT = l
          self.RIGHT = r
          return l + r + 1

        return l + r + 1
  
      dfs(root)
      
      TOP = n - (self.LEFT + self.RIGHT) - 1
    
      return TOP > self.LEFT + self.RIGHT + 1 or self.LEFT > self.RIGHT + TOP + 1 or self.RIGHT > self.LEFT + TOP + 1
