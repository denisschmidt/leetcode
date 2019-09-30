/*
Given a list of unique words,
find all pairs of distinct indices (i, j) in the given list,

so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Example 1:

Input: ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
Example 2:

Input: ["bat","tab","cat"]
Output: [[0,1],[1,0]]
Explanation: The palindromes are ["battab","tabbat"]

 */

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
  const trie = new Trie(words);

  words.forEach((word, index) => {
    const pairs = trie.search(word, index);
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
    const pairs = [];

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

      const c = word[i];

      if (!current.children[c]) {
        return pairs; // Mismatch
      }

      current = current.children[c];
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time O(N^2 * K)
const palindromePairs2 = function(words) {
  const size = words.length;
  const res = [];

  for (let i = 0; i <= size - 1; i++) {
    for (let j = 0; j <= size - 1; j++) {
      if (i === j) {
        continue;
      }

      const str = words[i] + words[j];
      if (isPalindrome(str, 0, str.length)) {
        let arr = [i, j];
        res.push(arr);
      }
    }
  }
  return res;
};
