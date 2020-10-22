class Trie:
    def __init__(self):
        self.root = Node()

    def add(self, s):
        current = self.root

        for ch in s:
            if not ch in current.children:
                current.children[ch] = Node()
            current = current.children[ch]

        current.word = s
        current.is_end = True

    def exists(self, word):
        current = self.root

        for ch in word:
            if not ch in current.children:
                return False
            current = current.children[ch]

        return current.is_end

    def startswith(self, p):
        current = self.root

        for ch in p:
            if not ch in current.children:
                return False
            current = current.children[ch]
        return True


class Node:
    def __init__(self):
        self.children = {}
        self.is_end = False
        self.word = None
