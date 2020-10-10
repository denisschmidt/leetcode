class MyHashMap:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.key_space = 2069
        self.hash_table = [Bucket() for i in range(self.key_space)]

    def put(self, key, value):
        """
        value will always be non-negative.
        """
        h = self.hash(key)
        self.hash_table[h].update(key, value)
        
    def hash(self, key):
      return key % self.key_space    

    def get(self, key):
        """
        Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
        """
        h = self.hash(key)
        return self.hash_table[h].get(key)
        

    def remove(self, key):
        """
        Removes the mapping of the specified value key if this map contains a mapping for the key
        """
        h = self.hash(key)
        self.hash_table[h].remove(key)
        
class Bucket:
  def __init__(self):
    super().__init__()
    self.bucket = []

  def get(self, key):
    for (k, v) in self.bucket:
      if k == key:
        return v
    return - 1      

  def update(self, key, value):
    found = False;
    for i, kv in enumerate(self.bucket):
      if key == kv[0]:
        self.bucket[i] = (key, value)
        found = True
        break
        
    if not found:
      self.bucket.append((key, value))

  def remove(self, key):
    for i, kv in enumerate(self.bucket):
      if key == kv[0]:
        del self.bucket[i]
