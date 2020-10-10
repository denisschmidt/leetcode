"""
Bucket and BST
"""
class MyHashSet:
  def __init__(self):
    self.keyRange = 769
    self.bucketArray = [Bucket() for i in range(self.keyRange)]

  def hash(self, value):
    return value % self.keyRange

  def add(self, newValue):
    bucketIndex = self.hash(newValue)
    self.bucketArray[bucketIndex].insert(newValue)

  def remove(self, value):
    bucketIndex = self.hash(value)
    self.bucketArray[bucketIndex].delete(value)

  def contains(self, value):
    bucketIndex = self.hash(value)
    return self.bucketArray[bucketIndex].exists(value)

class Bucket:
  def __init__(self):
    super().__init__()
    self.tree = BST()

  def insert(self, value):
    self.tree.root = self.tree.insert(self.tree.root, value)

  def delete(self, value):
    self.tree.root = self.tree.delete(self.tree.root, value)

  def exists(self, value):
    return (self.tree.search(self.tree.root, value) is not None)

class TreeNode:
  def __init__(self, value):
    super().__init__()
    self.val = value
    self.left = None
    self.right = None

class BST:
  def __init__(self):
    super().__init__()
    self.root = None

  def insert(self, root, target):
    if root is None:
      return TreeNode(target)
    if target > root.val:
      root.right = self.insert(root.right, target)
    if target < root.val:
      root.left = self.insert(root.left, target) 
    return root   

  def search(self, root, val):
    if root is None or val == root.val:
        return root

    return self.search(root.left, val) if val < root.val \
        else self.search(root.right, val)

  def delete(self, root, target):
    if root is None:
      return None

    if target > root.val:
      root.right = self.delete(root.right, target)
    elif target < root.val:
      root.left = self.delete(root.left, target)
    else:
      if self.isLeaf(root):
        return None
      if root.right:
        succ = self.getSuccessor(root)
        root.val = succ.val
        root.right = self.delete(root.right, root.val)
        return root
      if root.left:
        pred = self.getPredecessor(root)
        root.val = pred.val
        root.left = self.delete(root.left, root.val)
        return root
    return root 

  def isLeaf(self, root):
    return root.left == None and root.right == None

  def getSuccessor(self, root):
    root = root.right
    while root.left != None:
      root = root.left
    return root

  def getPredecessor(self, root):
    root = root.left
    while root.right != None:
      root = root.right
    return root