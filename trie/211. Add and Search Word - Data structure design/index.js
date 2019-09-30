/*
Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or ..
A . means it can represent any one letter.

Example:

  addWord("bad")
  addWord("dad")
  addWord("mad")
  search("pad") -> false
  search("bad") -> true
  search(".ad") -> true
  search("b..") -> true
Note:
  You may assume that all words are consist of lowercase letters a-z.

 */

// addWord () - O(N), N = длина нового слова
// search () - Наихудший случай: O(M), M = общее количество символов в Trie
class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let cur = this.root;

    for (let w of word) {
      if (!(w in cur.children)) {
        cur.children[w] = new TrieNode();
      }
      cur = cur.children[w];
    }

    cur.isEnd = true;
  }

  search(word) {
    const search = (cur, level) => {
      if (!cur || (level === word.length && !cur.isEnd)) return false;

      if (level === word.length && cur.isEnd) return true;

      let char = word[level];

      if (char === '.') {
        for (let i = 0; i < 26; i++) {
          let ch = String.fromCharCode(97 + i);

          if (search(cur.children[ch], level + 1)) {
            return true;
          }
        }
        return false;
      }

      return search(cur.children[char], level + 1);
    };

    return search(this.root, 0);
  }
}

class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}
