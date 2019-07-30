/*
This problem was asked by Twitter.

Implement an autocomplete system.
That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string "de" and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

 */
// Time O(N) time, where N is the number of words in the dictionary.
const autocomplete = (words, str) => {
  const map = new Set();
  for (let word of words) {
    if (word.startsWith(str)) {
      map.add(word);
    }
  }
  return map;
};

const res = autocomplete(['dog', 'deer', 'deal'], 'de');
console.log('----', res);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Alternatively, we could use a tree for this where each child represents one character of the alphabet.

For example, let's say we had the words 'a' and 'dog' in our dictionary. Then the tree would look like this:

  x
 / \
a   d
     \
      o
       \
        g

Then, to find all words beginning with 'do', we could start at the root, go into the 'd' child, and then the 'o', child,
and gather up all the words under there.

We would also some sort of terminal value to mark whether or not 'do' is actually a word in our dictionary or not.

So the idea is to preprocess the dictionary into this tree, and then when we search for a prefix,
go into the trie and get all the words under that prefix node and return those.

While the worst-case runtime would still be O(n) if all the search results have that prefix,

if the words are uniformly distributed across the alphabet, it should be much faster on average since we no longer have to evaluate words
that don't start with our prefix.


Time O(N)
Space O(N)
 */

const ENDS_HERE = '__ENDS_HERE';

class Tree {
  constructor() {
    this._tree = {};
  }

  // создаем дерево из алфавита
  insert(str) {
    let tree = this._tree;
    for (let char of str) {
      if (!tree.hasOwnProperty(char)) {
        tree[char] = {};
      }
      tree = tree[char];
    }
    tree[ENDS_HERE] = true;
  }

  // получаем суффиксы
  elements(prefix) {
    let tree = this._tree;
    for (let char of prefix) {
      if (tree.hasOwnProperty(char)) {
        tree = tree[char];
      } else {
        return [];
      }
    }
    return this._elements(tree);
  }

  // получаем массив суффиксов
  _elements(tree) {
    let result = [];
    let subResult = [];
    Object.entries(tree).forEach(([key, value]) => {
      if (key === ENDS_HERE) {
        subResult = [''];
      } else {
        for (let s of this._elements(value)) {
          subResult = [key + s];
        }
      }
      result.push(subResult);
    });
    return result;
  }
}

const autocompleteTree = (words, str) => {
  const ans = [];
  const tree = new Tree();
  for (let word of words) {
    tree.insert(word);
  }

  let suffixes = tree.elements(str);
  // склеиваем префиксы и суффиксы
  for (let suffix of suffixes) {
    ans.push(str + suffix);
  }
  return ans;
};

const res2 = autocompleteTree(['dog', 'deer', 'deal'], 'de');
console.log('---', res2);
