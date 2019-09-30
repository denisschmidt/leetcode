/*
Implement a trie with insert, search, and startsWith methods.


 *                        root
 *                     /   \    \
 *                     t   a     b
 *                     |   |     |
 *                     h   n     y
 *                     |   |  \  |
 *                     e   s  y  e
 *                  /  |   |
 *                  i  r   w
 *                  |  |   |
 *                  r  e   e
 *                         |
 *                         r


Trie - это эффективная структура данных для поиска информации.
Используя Trie, Сложности поиска могут быть доведены до оптимального предела (длина ключа).

Если мы храним ключи в бинарном дереве поиска

Для хорошо сбалансированного BST потребуется время, пропорциональное M * log N,
где M - максимальная длина строки, а N - количество ключей в дереве.

Используя Trie, мы можем искать ключ за O(M) время.

Однако печаль по поводу расходов к хранению данных Trie.

Example:

  Trie trie = new Trie();

  trie.insert("apple");
  trie.search("apple");   // returns true
  trie.search("app");     // returns false
  trie.startsWith("app"); // returns true
  trie.insert("app");
  trie.search("app");     // returns true

Note:
  You may assume that all inputs are consist of lowercase letters a-z.
  All inputs are guaranteed to be non-empty strings.
 */

class TrieNode {
  constructor() {
    this.children = {};
    this.word = null;
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let current = this.root;

    for (let w of word) {
      if (!(w in current.children)) {
        current.children[w] = new TrieNode();
      }
      current = current.children[w];
    }

    current.word = word;
    current.isEnd = true;
  }

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let current = this.root;

    for (let w of word) {
      if (!(w in current.children)) {
        return false;
      }
      current = current.children[w];
    }

    return current.isEnd;
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let current = this.root;

    for (let w of prefix) {
      if (!(w in current.children)) {
        return false;
      }
      current = current.children[w];
    }

    return true;
  }
}
