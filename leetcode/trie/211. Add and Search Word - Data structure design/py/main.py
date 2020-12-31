class WordDictionary:

    def __init__(self):
        self.tree = Trie()        

    def addWord(self, word: str) -> None:
        self.tree.insert(word)   

    def search(self, word: str) -> bool:
        return self.tree.search(word)

class Trie:

    def __init__(self):
        self.root = Node()        

    def insert(self, word: str) -> None:
        node = self.root
        
        for w in word:
            if w not in node.children:
                node.children[w] = Node()
            node = node.children[w]        
        
        node.isWord = True

    def search(self, word: str) -> bool:
        n = len(word)

        def dfs(index, current):
          if index >= n:
            return current.isWord
          
          if word[index] == '.':
            for k in current.children.keys():
              if dfs(index + 1, current.children[k]):
                return True

          if word[index] in current.children and dfs(index + 1, current.children[word[index]]):
            return True
          
          return False

        return dfs(0, self.root)

class Node:

    def __init__(self, ):
      self.children = {}
      self.isWord = False
