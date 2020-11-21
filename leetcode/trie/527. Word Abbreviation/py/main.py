class Node :
  def __init__(self):
    self.children = {}
    self.prefix_indexes = []

# Group + Trie 
# Time O(C) where C is the number of characters across all words in the given array.
# Space O(C)
class Solution:
    def wordsAbbreviation(self, words):
        groups = collections.defaultdict(list)
        res = [None] * len(words)

        for index, word in enumerate(words):
          groups[len(word), word[0], word[-1]].append((word, index))
        
        # знаем что первый и последний симловы равны
        # длины тоже равны
        # абривиатуру только можно сделать из разных префиксов
        for group in groups.values():
          trie = Node()
          
          for word, index in group:
            current = trie

            for w in word:
              if w not in current.children:
                current.children[w] = Node()
              
              current.children[w].cnt += 1
              current = current.children[w]

          for word, index in group:
            current = trie
            prefix_index = -1

            for k, w in enumerate(word):
              if current.children[w].cnt == 1:
                prefix_index = k
                break
              current = current.children[w]

            cnt = len(word) - (prefix_index + 1) - 1
            
            if cnt > 1:
              res[index] = word[:prefix_index + 1] + str(cnt) + word[-1]
            else:
              res[index] = word

        return res

# Implement Trie 
class Trie:
  def __init__(self, words):
    self.root = Node()
    self.words = words

    for i, word in enumerate(words):
      self.insert(word, i)

  def insert(self, word, index):
    current = self.root

    for w in word:
      if w not in current.children:
        current.children[w] = Node()

      current.children[w].prefix_indexes.append(index)

      current = current.children[w]

  def start_with(self, word, index):
    current = self.root

    for i, w in enumerate(word):
      if w not in current.children:
        return i
      
      if self.is_valid_prefix(index, current.children[w].prefix_indexes):
        return i

      current = current.children[w]

    return -1

  def is_valid_prefix(self, index, prefix_indexes):
    for prefix_index in prefix_indexes:
      if prefix_index == index:
        continue
      
      if len(self.words[index]) == len(self.words[prefix_index]) and self.words[index][-1] == self.words[prefix_index][-1]:
        return False

    return True

# Only Trie
class Solution_II:
    def wordsAbbreviation(self, words):
        tree = Trie(words)
        res = []

        for index, word in enumerate(words):
          prefix_index = tree.start_with(word, index)

          if prefix_index == -1:
            res.append(word)
          else:
            cnt = len(word) - (prefix_index + 1) - 1

            if cnt > 1:
              res.append(word[:prefix_index + 1] + str(cnt) + word[-1])
            else:
              res.append(word)

        return res

import collections
