/*

Given a list of words, we may encode it by writing a reference string S and a list of indexes A.

For example, if the list of words is ["time", "me", "bell"], we can write it as S = "time#bell#" and indexes = [0, 2, 5].

Then for each index, we will recover the word by reading from the reference string from that index until we reach a "#" character.

What is the length of the shortest reference string S possible that encodes the given words?

Example:
  Input: words = ["time", "me", "bell"]
  Output: 10
  Explanation: S = "time#bell#" and indexes = [0, 2, 5].
 

Note:
  1 <= words.length <= 2000.
  1 <= words[i].length <= 7.
  Each word has only lowercase letters.

*/

// Time O(sum(w[i])) где w[i] длина одного слова.
// Space O(sum(w[i]))
const minimumLengthEncoding = words => {
  let trie = new Trie();
  let nodes = [];
  let res = 0;
  let set = new Set(words);

  for (let word of set.values()) {
    let node = trie.insert(word);
    nodes.push(node);
  }

  for (let node of nodes) {
    if (!Object.keys(node.children).length) {
      res += node.depth + 1;
    }
  }
  return res;
};

class Node {
  constructor() {
    this.children = {};
    this.depth = 0;
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let current = this.root;

    for (let i = word.length - 1; i >= 0; i--) {
      let w = word[i];

      if (!(w in current.children)) {
        current.children[w] = new Node();
      }

      current = current.children[w];
    }

    current.depth = word.length;
    current.isEnd = true;

    return current;
  }

  startsWith(word) {
    let current = this.root;

    for (let w of word) {
      if (!(w in current.children)) {
        return false;
      }
      current = current.children[w];
    }

    return current.isEnd ? false : true;
  }
}

// Time O(N^2)
// Space O(N)
const minimumLengthEncoding_II = words => {
  let removed = new Set();

  for (let i = 0; i < words.length; i++) {
    if (removed.has(i)) continue;

    for (let j = 0; j < words.length; j++) {
      if (i == j || removed.has(j)) continue;

      if (words[i].endsWith(words[j])) {
        removed.add(j);
      }
    }
  }

  let res = [];

  for (let i = 0; i < words.length; i++) {
    if (removed.has(i)) continue;
    res.push(words[i]);
  }

  return res.join('#').length + 1;
};
