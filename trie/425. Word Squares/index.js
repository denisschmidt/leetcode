/*
Given a set of words (without duplicates), find all word squares you can build from them.

A sequence of words forms a valid word square if the kth row and column read the exact same string, where 0 ≤ k < max(numRows, numColumns).

For example, the word sequence ["ball","area","lead","lady"] forms a word square because 
each word reads the same both horizontally and vertically.

b a l l
a r e a
l e a d
l a d y

Note:
  There are at least 1 and at most 1000 words.
  All words will have the exact same length.
  Word length is at least 1 and at most 5.
  Each word contains only lowercase English alphabet a-z.

Example 1:
  
  Input: ["area","lead","wall","lady","ball"]
  
  Output:
  [
    [ "wall",
      "area",
      "lead",
      "lady"
    ],
    [ "ball",
      "area",
      "lead",
      "lady"
    ]
  ]

  Explanation: 
    The output consists of two word squares. 
    The order of output does not matter (just the order of words in each word square matters).

Example 2:

Input: ["abat","baba","atan","atal"]
 
  Output:
    [
      [ "baba",
        "abat",
        "baba",
        "atan"
      ],
      [ "baba",
        "abat",
        "baba",
        "atal"
      ]
    ]

  Explanation: 
    The output consists of two word squares. 
    The order of output does not matter (just the order of words in each word square matters).
 */

// https://leetcode.com/problems/word-squares/discuss/91333/Explained.-My-Java-solution-using-Trie-126ms-1616

const wordSquares = function(words) {
  if (words === null || words.length === 0) return [];
  if (words.length === 1) return [words];

  let ans = [];
  const trie = new Trie(words);

  for (let word of words) {
    trie.search([word], ans);
  }

  return ans;
};

class Trie {
  constructor(words) {
    this.root = new TrieNode();

    words.forEach(word => {
      this.insert(word);
    });
  }

  insert(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];

      if (!current.children[c]) {
        current.children[c] = new TrieNode();
      }

      current = current.children[c];
      current.words.push(word); // записываем слово в текущий префикс
    }
  }

  search(solution, results) {
    const count = solution.length;
    const length = solution[0].length;

    if (count === length) {
      return results.push([...solution]); // Найденно достаточно слов
    }

    // найти префикс для след слова
    /*
    1) В такой ситуации префикс должен быть равен a 
      [
        wall,
      ]
    2) В такой ситуации префикс должен быть равен le
      [
        wall,
        area,
      ]
    3) В такой ситуации префикс должен быть равен led
      [
        wall,
        area,
        lead
      ]

    4) В такой ситуации префикс должен быть равен lady
    [
      wall,
      area,
      lead,
      lady
    ]
     */

    let prefix = '';
    for (let i = 0; i < count; i++) {
      prefix += solution[i][count] ? solution[i][count] : '';
    }

    // найти слово с таким префиком
    let current = this.root;
    for (let p of prefix) {
      if (!(p in current.children)) {
        return;
      }
      current = current.children[p];
    }

    // Используем каждое возможное слово
    const words = current.words;
    for (let word of words) {
      solution.push(word); // попробуем это слово
      this.search(solution, results);
      solution.pop(); // Backtracking
    }
  }
}

class TrieNode {
  constructor() {
    this.children = {};
    this.words = [];
  }
}

const res = wordSquares(['area', 'lead', 'wall', 'lady', 'ball']);
console.log(res);
