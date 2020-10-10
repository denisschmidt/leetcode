from collections import deque

class TreeNode(object):
  def __init__(self, x):
    self.val = x
    self.left = None
    self.right = None

class Codec:
    """Encodes a tree to a single string.    
      :type root: TreeNode
      :rtype: str
    """
    def serialize(self, root):
        if root == None:
          return []

        queue = deque()
        queue.append(root)
        res = []

        while queue:
          node = queue.popleft()

          if node:
            queue.append(node.left)
            queue.append(node.right)
            res.append(node.val)
          else:
            res.append(None)

        while len(res) and res[-1] == None:
          res.pop()

        return res
        
    """
      Decodes your encoded data to tree.  
      :type data: str
      :rtype: TreeNode
    """
    def deserialize(self, data):
      if len(data) == 0:
        return None

      queue = deque()
      index = 0
      
      root = TreeNode(data[index])
      index += 1

      queue.append(root)

      while queue and index < len(data):
        node = queue.popleft()
        left = data[index]
        index += 1

        if left != None:
          node.left = TreeNode(left)
          queue.append(node.left)
            
        if index == len(data):
            break
            
        right = data[index]
        index += 1
        
        if right != None:
          node.right = TreeNode(right)
          queue.append(node.right)

      return root        
        

# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))