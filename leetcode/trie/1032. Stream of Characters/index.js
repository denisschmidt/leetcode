/*

Implement the StreamChecker class as follows:

StreamChecker(words): Constructor, init the data structure with the given words.
query(letter): returns true if and only if for some k >= 1, the last k characters queried (in order from oldest to newest, including this letter just queried) spell one of the words in the given list.
 

Example:
  StreamChecker streamChecker = new StreamChecker(["cd","f","kl"]); // init the dictionary.
  streamChecker.query('a');          // return false
  streamChecker.query('b');          // return false
  streamChecker.query('c');          // return false
  streamChecker.query('d');          // return true, because 'cd' is in the wordlist
  streamChecker.query('e');          // return false
  streamChecker.query('f');          // return true, because 'f' is in the wordlist
  streamChecker.query('g');          // return false
  streamChecker.query('h');          // return false
  streamChecker.query('i');          // return false
  streamChecker.query('j');          // return false
  streamChecker.query('k');          // return false
  streamChecker.query('l');          // return true, because 'kl' is in the wordlist
  

Note:
  1 <= words.length <= 2000
  1 <= words[i].length <= 2000
  Words will only consist of lowercase English letters.
  Queries will only consist of lowercase English letters.
  The number of queries is at most 40000.

*/

/* 
  Алгоритм: 
 
  1) Сохранить все слова в Trie в обратном порядке 
  2) Проверить строку запроса с конца

*/
class StreamChecker {
  constructor(words) {
    this.root = new TrieNode();

    this.max = 0;
    this.stack = [];
    this.currentLen = 0;

    for (let word of words) {
      this.insert(word);
      this.max = Math.max(this.max, word.length);
    }
  }

  query(current) {
    this.currentLen += current.length;

    if (this.currentLen <= this.max) {
      this.stack.push(current);
    } else {
      this.stack.push(current);

      while (this.stack.length > 0 && this.currentLen > this.max) {
        let s = this.stack.shift();
        this.currentLen -= s.length;
      }
    }

    let str = this.stack.join('');
    let node = this.root;

    for (let i = str.length - 1; i >= 0 && node != null; i--) {
      node = node.children[str[i]];

      if (node != null && node.isEnd) {
        return true;
      }
    }
    return false;
  }

  insert(word) {
    let node = this.root;

    for (let i = word.length - 1; i >= 0; i--) {
      let w = word[i];
      if (!(w in node.children)) {
        node.children[w] = new TrieNode();
      }
      node = node.children[w];
    }

    node.word = word;
    node.isEnd = true;
  }
}

class TrieNode {
  constructor() {
    this.children = {};
    this.word = null;
    this.isEnd = false;
  }
}
