# Detailed solution: https://leetcode.com/problems/palindrome-pairs/solution/

class Solution:
  def palindromePairs(self, words):
    trie = Trie(words)
    res = []

    for i in range(len(words)):
      pairs = trie.search(words[i], i)
      res = res + pairs
    
    return res

class Node :
  def __init__(self):
    self.children = {}
    self.ending_word = -1
    self.palindrome_suffixes = []

class Trie:
  def __init__(self, words):
    self.root = Node()

    for i in range(len(words)):
      self.insert(words[i], i)

    # Put all the words into the Trie in reverse
  def insert(self, word, index):
    current = self.root

    for i in reversed(range(len(word))):
      if word[i] not in current.children:
        current.children[word[i]] = Node()

      # Case 2 Reversed word + palindrome  
      # Rest of the word is a palindrome 
      if self.is_palidrome(word, 0, i):
        current.palindrome_suffixes.append(index)

      current = current.children[word[i]]
      
    current.ending_word = index
    current.palindrome_suffixes.append(index)

  # Case 1 is where a palindrome pair is formed by 2 words that are the reverse of each other. 
  # Remember that for the output, we need to give the indexes of each pair. 
  # We'll add an index field onto each end of word node.
  def search(self, word, index):
    current = self.root
    pairs = []

    for i in range(len(word)):
      # Case 3 when first word greater than second word in the trie 
      # And prefix first word == second word and rest suffix of current word is a palindrome
      
      # Example: word1: "CATSOLOS" word2: "TAC" where CAT == TAC and SOLOS is palindrome
      
      if current.ending_word >= 0 and current.ending_word != index and self.is_palidrome(word, i, len(word) - 1):
        pairs.append([index, current.ending_word])
      
      if word[i] not in current.children:
        return pairs
      
      current = current.children[word[i]]

    # Case 2 current word == reversed word in the trie and rest is a palindrome 
    # Example: word1: "CATSOLOS" word2: "TAC" where CAT == TAC and SOLOS is palindrome 
    for i in current.palindrome_suffixes:
      if i != index:
        pairs.append([index, i])

    return pairs

  def is_palidrome(self, word, lo, hi):
    while lo < hi:
      if word[lo] != word[hi]:
        return False
      lo += 1
      hi -= 1
    return True

