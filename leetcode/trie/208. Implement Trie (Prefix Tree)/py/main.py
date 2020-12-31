class Trie:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = Node()        

    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """
        current = self.root
        
        for w in word:
            if w not in current.children:
                current.children[w] = Node()
            current = current.children[w]
        
        current.isWord = True
        

    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """
        current = self.root
        
        for w in word:
            if w not in current.children:
                return False
            current = current.children[w]
        
        return current.isWord

    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """
        current = self.root
        
        for w in prefix:
            if w not in current.children:
                return False
            current = current.children[w]
        
        return True
        
class Node:
    def __init__(self, ):
      self.children = {}
      self.isWord = False
