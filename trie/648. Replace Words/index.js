/*
In English, we have a concept called root, which can be followed by some other words to form another longer word - 
let's call this word successor. 

For example, the root an, followed by other, which can form another word another.

Now, given a dictionary consisting of many roots and a sentence. 

You need to replace all the successor in the sentence with the root forming it. 

If a successor has many roots can form it, replace it with the root with the shortest length.

You need to output the sentence after the replacement.

Example 1:

  Input: dict = ["cat", "bat", "rat"] sentence = "the cattle was rattled by the battery"
  Output: "the cat was rat by the bat"
 

Note:

  The input will only have lower-case letters.
  1 <= dict words number <= 1000
  1 <= sentence words number <= 1000
  1 <= root length <= 100
  1 <= sentence words length <= 1000

 */

// Trie
// Time O(N)
// Space O(N)
const replaceWords = function (dict, sentence) {
  let chars = sentence.split(' ');

  const trie = new Trie(dict);

  for (let i = 0; i < chars.length; i++) {
    let newStr = trie.startWith(chars[i]);
    if (newStr) {
      chars[i] = newStr;
    }
  }

  return chars.join(' ');
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

    for (let w of word) {
      if (!(w in current.children)) {
        current.children[w] = new TrieNode();
      }
      current = current.children[w];
    }

    current.isEnd = true;
    current.word = word;
  }

  startWith(search) {
    let current = this.root;

    for (let s of search) {
      if (current.isEnd && s in current.children) {
        break;
      } else if (!(s in current.children)) {
        break;
      }
      current = current.children[s];
    }

    if (current.isEnd) {
      return current.word;
    }

    return null;
  }
}

class TrieNode {
  constructor() {
    this.children = {};
    this.word = null;
    this.isEnd = false;
  }
}

const dict = ['cat', 'bat', 'rat'];
const str = 'the cattle was rattled by the battery';

const res = replaceWords(dict, str);
console.log(res);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N^2)
// Space O(N)
const replaceWords2 = function (dict, sentence) {
  let arr = sentence.split(' ');
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let len = Number.MAX_VALUE;
    let replace = '';

    for (let root of dict) {
      if (str.startsWith(root) && root.length < len) {
        len = root.length;
        replace = root;
      }
    }

    if (replace) {
      arr[i] = replace;
    }
  }

  return arr.join(' ');
};
