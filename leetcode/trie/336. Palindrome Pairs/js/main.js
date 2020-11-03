/**
 * Solution using Trie
 * Time complexity: O(n * k^2) where k is Where n is the number of words in the list
 * and k is the maximum length that is checked for palindrome.
 *
 * An intuitive brute force solution time complexity is O(n^2 * k).
 */

// Time O(N * k^2)
// Space O(N)
const palindromePairs = words => {
  let results = [];
  let trie = new Trie(words);

  words.forEach((word, index) => {
    let pairs = trie.search(word, index);
    results = results.concat(pairs);
  });

  return results;
};

class TrieNode {
  constructor() {
    this.children = {};
    this.index = -1;
    this.palindromeIndices = [];
  }
}

class Trie {
  constructor(words) {
    this.root = new TrieNode();

    words.forEach((word, index) => {
      this.insert(word, index);
    });
  }

  insert(word, index) {
    let current = this.root;

    for (let i = word.length - 1; i >= 0; i--) {
      const c = word[i];

      if (!current.children[c]) {
        current.children[c] = new TrieNode();
      }

      if (isPalindrome(word, 0, i)) {
        current.palindromeIndices.push(index);
      }

      current = current.children[c];
    }

    current.index = index;
    current.palindromeIndices.push(index);
  }

  search(word, index) {
    let pairs = [];

    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      // Case 1. слово длинное
      // 0:    abc
      //       |
      //       index = 0, palindromeIndices: [0]
      //       |
      //       current
      //       |
      // 1: cbaaaaaaa (word)
      //       i
      //
      // [1, 0] is a pair

      // На проверку полидрома уйдет слово aaaaaa оно полидром
      if (current.index >= 0 && current.index !== index && isPalindrome(word, i, word.length - 1)) {
        pairs.push([index, current.index]);
      }

      if (!current.children[word[i]]) {
        return pairs; // Mismatch
      }

      current = current.children[word[i]];
    }

    // Case 2. длинное слово
    // 0: aaaaaaabc
    //          |
    //          palindromeIndices = [0]
    //          |
    //          current
    //          |
    // 1:    cba
    //          i
    current.palindromeIndices.forEach(i => {
      if (i !== index) {
        pairs.push([index, i]);
      }
    });

    return pairs;
  }
}

const isPalindrome = (str, i, j) => {
  while (i < j) {
    if (str[i++] !== str[j--]) {
      return false;
    }
  }
  return true;
};

// Time O(N^2 * K)
const palindromePairs_II = words => {
  let res = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPalidrome(words[i], words[j])) {
        res.push([i, j]);
      }

      if (isPalidrome(words[j], words[i])) {
        res.push([j, i]);
      }
    }
  }

  return res;

  function isPalidrome(a = '', b = '') {
    let i = 0;
    let j = b.length - 1;

    while (i < a.length && j >= 0) {
      if (a[i] != b[j]) {
        return false;
      }
      i++;
      j--;
    }

    let k = a.length - 1;

    while (i < a.length) {
      if (a[i] != a[k]) return false;
      i++;
      k--;
    }

    k = 0;

    while (k < j) {
      if (b[k] != b[j]) return false;
      j--;
      k++;
    }

    return true;
  }
};
