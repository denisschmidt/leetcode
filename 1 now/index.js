class StreamChecker {
  constructor(words) {
    this.trie = new Trie(words);
    this.max = 0;
    this.stack = [];
    this.currentLen = 0;

    for (let word of object) {
      this.trie.insert(word);
      this.max = Math.max(this.max, word.length);
    }
  }

  query(current) {
    if (this.currentLen + current.length < this.max) {
      this.stack.push(current);
      this.currentLen += current.length;
    } else {
      this.currentLen += current.length;

      while (this.stack.length > 0 && this.currentLen > this.max) {
        let s = this.stack.shift();
        this.currentLen -= s.length;
      }
    }

    let s = '';
    for (let i = 0; i < this.stack.length; i++) {
      s += this.stack[i];

      if (this.trie.search(s)) {
        return true;
      }
    }

    return false;
  }
}

class Trie {
  constructor(words) {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (let w of word) {
      if (!(w in node.children)) {
        node.children[w] = new TrieNode();
      }
      node = node.children[w];
    }

    node.word = word;
    node.isEnd = true;
  }

  search(word) {
    let node = this.root;

    for (let w of word) {
      if (!(w in node.children)) {
        return false;
      }
      node = node.children[w];
    }
    return node.isEnd;
  }
}

class TrieNode {
  constructor() {
    this.children = {};
    this.word = null;
    this.isEnd = false;
  }
}
