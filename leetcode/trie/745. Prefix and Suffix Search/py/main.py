# For a word like "test", consider "#test", "t#test", "st#test", "est#test", "test#test".
# Prefix could be a static, we need only change a suffix
 
# Then if we have a query like prefix = "te", suffix = "t" 
# We can find it by searching for something we've inserted starting with "t#te".

class WordFilter:

    def __init__(self, words):
        self.trie = Trie()

        for wordIndex, word in enumerate(words):
          self.trie.insert('#' + word, wordIndex)

          for j in reversed(range(len(word))):
            self.trie.insert(word[j:len(word)] + '#' + word, wordIndex)
          
    def f(self, prefix: str, suffix: str) -> int:
        return self.trie.startsWith(suffix + '#' + prefix)

class Trie:

    def __init__(self):
        self.root = Node()        

    def insert(self, word, wordIndex):
        current = self.root
        
        for w in word:
            if w not in current.children:
                current.children[w] = Node()
            current = current.children[w]
            current.maxIndex = max(current.maxIndex, wordIndex)

        current.maxIndex = max(current.maxIndex, wordIndex)

    def startsWith(self, prefix):
        current = self.root
        
        for w in prefix:
            if w not in current.children:
                return -1
            current = current.children[w]

        return current.maxIndex
        
class Node:
    def __init__(self, ):
      self.children = {}
      self.maxIndex = -1
