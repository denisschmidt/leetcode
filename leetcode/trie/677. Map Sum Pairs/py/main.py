class MapSum:

    def __init__(self):
        self.tree = Trie()
        self.pairs= {}

    def insert(self, key: str, val: int) -> None:
        if key in self.pairs:
          self.tree.insert(key, val - self.pairs[key])
          self.pairs[key] = val
          return
        
        self.pairs[key] = val
        self.tree.insert(key, val)

    def sum(self, prefix: str) -> int:
        return self.tree.startsWith(prefix)

class Trie:

    def __init__(self):
        self.root = Node()        

    def insert(self, word: str, value) -> None:
        current = self.root
        
        for w in word:
            if w not in current.children:
                current.children[w] = Node()
            current = current.children[w]
            current.value += value
        
    def startsWith(self, prefix: str) -> bool:
        current = self.root

        for w in prefix:
            if w not in current.children:
                return 0
            current = current.children[w]
            
        return current.value
        
class Node:
    def __init__(self, ):
      self.children = {}
      self.value = 0