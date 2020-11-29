class List:
  def __init__(self, key = None, value = None):
    self.key = key
    self.value = value
    self.prev = None
    self.next = None

class DoubleLinkedList:
  def __init__(self):
    self.head = List()
    self.tail = List()

    self.head.next = self.tail
    self.tail.prev = self.head

  def insert(self, node):
    node.next = self.head.next
    node.prev = self.head

    self.head.next.prev = node
    self.head.next = node

  def remove(self, node):
    node.prev.next = node.next
    node.next.prev = node.prev

  def get_last(self):
    return self.tail.prev

class LRUCache:

    def __init__(self, capacity: int):
      self.linked_list = DoubleLinkedList()
      self.cache = {}
      self.capacity = capacity

    def get(self, key: int) -> int:
        if key not in self.cache:
          return -1

        node = self.cache[key]

        self.linked_list.remove(node)
        self.linked_list.insert(node)

        return node.value


    def put(self, key: int, value: int) -> None:
      if self.capacity == 0: return

      if key in self.cache:
        node = self.cache[key]

        node.value = value
        
        self.linked_list.remove(node)
        self.linked_list.insert(node)
        
        return

      if len(self.cache) == self.capacity:
        last_node = self.linked_list.get_last()
                
        node = self.cache[last_node.key]

        del self.cache[last_node.key]

        self.linked_list.remove(node)

      new_node = List(key, value)
      self.cache[key] = new_node
      
      self.linked_list.insert(new_node)
