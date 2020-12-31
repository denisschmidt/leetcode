// addWord () - O(N), N = длина нового слова
// search () - Наихудший случай: O(M), M = общее количество символов в Trie
class WordDictionary {
  constructor() {
    this.root = new Node();
  }

  addWord(word) {
    let node = this.root;

    for (let w of word) {
      if (!(w in node.children)) {
        node.children[w] = new Node();
      }
      node = node.children[w];
    }

    node.isWord = true;
  }

  dfs(word, node, index) {
    if (index >= word.length) {
      return node.isWord;
    }

    if (word[index] == '.') {
      for (let i = 0; i < 26; i++) {
        let ch = String.fromCharCode(i + 97);

        if (ch in node.children && this.dfs(word, node.children[ch], index + 1)) {
          return true;
        }
      }
      return false;
    }

    if (!(word[index] in node.children)) {
      return false;
    }

    return this.dfs(word, node.children[word[index]], index + 1);
  }

  search(word) {
    return this.dfs(word, this.root, 0);
  }
}

class Node {
  constructor() {
    this.isWord = false;
    this.children = {};
    this.word = null;
  }
}
