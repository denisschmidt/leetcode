"""
Bucket and LinkedList


"""
class MyHashSet:

  def __init__(self):
      """
      Initialize your data structure here.
      """
      self.keyRange = 769
      self.bucketArray = [Bucket() for i in range(self.keyRange)]
      
  def _hash(self, key):
    return key % self.keyRange

  def add(self, key):
    backetIndex = self._hash(key)
    self.bucketArray[backetIndex].insert(key)

  def remove(self, key):
    bucketIndex = self._hash(key)
    self.bucketArray[bucketIndex].delete(key)

  def contains(self, key):
    """
    Returns true if this set contains the specified element
    """
    bucketIndex = self._hash(key)
    return self.bucketArray[bucketIndex].exists(key)
      

class Node:
  def __init__(self, value, nextNode=None):
    self.value = value
    self.next = nextNode

class Bucket:
  def __init__(self):
    self.head = Node(0)

  def insert(self, newValue):
    if not self.exists(newValue):
      newNode = Node(newValue, self.head.next)
      self.head.next = newNode

  def delete(self, value):
    prev = self.head
    curr = self.head.next

    while curr is not None:
      if curr.value == value:
        prev.next = curr.next
        return
      prev = curr
      curr = curr.next  

  def exists(self, value):
    curr = self.head.next
    while curr is not None:
      if curr.value == value:
        # value existed already, do nothing
        return True
      curr = curr.next
    return False
