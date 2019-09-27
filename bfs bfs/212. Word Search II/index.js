/*
Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" 
cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

Example:
  Input:
  board = [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
  ]
  words = ["oath","pea","eat","rain"]

  Output: ["eat","oath"]
 

Note:

  All inputs are consist of lowercase letters a-z.
  The values of words are distinct.

 */

// Backtrack + Trie
// Time O(N^2)
// Space O(N)
const findWords = function(board, words) {
  const dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  const ans = [];
  const n = board.length;
  const m = board[0].length;
  const trie = new Trie(words);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      backtrack(i, j, trie.root);
    }
  }

  return ans;

  function backtrack(i, j, current) {
    if (i >= n || i < 0 || j >= m || j < 0) {
      return;
    }

    const c = board[i][j];

    if (c === '#' || !current.children[c]) {
      return;
    }

    current = current.children[c];

    if (current.word) {
      ans.push(current.word);

      current.word = null;
    }

    board[i][j] = '#'; // помечаем как отмеченное уже ранее

    for (let [start, end] of dirs) {
      backtrack(i + start, j + end, current);
    }

    board[i][j] = c; // backtrack
  }
};
class Trie {
  constructor(words) {
    this.root = new TrieNode();

    words.forEach(word => {
      this.addWord(word);
    });
  }

  addWord(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!(word[i] in current.children)) {
        current.children[word[i]] = new TrieNode();
      }
      current = current.children[word[i]];
    }

    current.word = word;
  }
}

class TrieNode {
  constructor() {
    this.children = {};
    this.word = null;
  }
}

const input = [
  ['s', 'e', 'e', 'n', 'e', 'w'],
  ['t', 'm', 'r', 'i', 'v', 'a'],
  ['o', 'b', 's', 'i', 'b', 'd'],
  ['w', 'm', 'y', 's', 'e', 'n'],
  ['l', 't', 's', 'n', 's', 'a'],
  ['i', 'e', 'z', 'l', 'g', 'n'],
];

const res = findWords(input, ['anesis']);
console.log('---', res);
