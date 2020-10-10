/*

Given an array of strings products and a string searchWord. 
We want to design a system that suggests at most three product names from products after each character of searchWord is typed. 
Suggested products should have common prefix with the searchWord. 
If there are more than three products with a common prefix return the three lexicographically minimums products.

Return list of lists of the suggested products after each character of searchWord is typed. 

Example 1:
  Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
  Output: [
  ["mobile","moneypot","monitor"],
  ["mobile","moneypot","monitor"],
  ["mouse","mousepad"],
  ["mouse","mousepad"],
  ["mouse","mousepad"]
  ]
  Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
  After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
  After typing mou, mous and mouse the system suggests ["mouse","mousepad"]

Example 2:
  Input: products = ["havana"], searchWord = "havana"
  Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]

Example 3:
  Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
  Output: [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]

Example 4:
  Input: products = ["havana"], searchWord = "tatiana"
  Output: [[],[],[],[],[],[],[]]
  

Constraints:
  1 <= products.length <= 1000
  There are no repeated elements in products.
  1 <= Σ products[i].length <= 2 * 10^4
  All characters of products[i] are lower-case English letters.
  1 <= searchWord.length <= 1000
  All characters of searchWord are lower-case English letters.

*/

// M - средняя длина products, N = products.length, L = searchWord.length().

// Time O(NLogN + N*M + L * L)
// Space O(M*N + L * M) - включая ans
const suggestedProducts = (products, searchWord) => {
  let trie = new Trie();

  products.sort();

  // Time O(N*M)
  products.forEach(p => trie.insert(p));

  // Time O(L * L)
  let ans = [];
  for (let i = 1; i <= searchWord.length; i++) {
    let sug = trie.searchPrefix(searchWord.substring(0, i));
    if (sug.length > 0) {
      sug = sug.slice(0, 3);
      ans.push(sug);
    } else {
      ans.push([]);
    }
  }

  return ans;
};

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;

    for (let w of word) {
      if (!(w in current.children)) {
        current.children[w] = new TrieNode();
      }
      current = current.children[w];

      if (current.words.length < 3) {
        current.words.push(word);
      }
    }
  }

  searchPrefix(prefix) {
    let current = this.root;

    for (let w of prefix) {
      if (!(w in current.children)) {
        return [];
      }
      current = current.children[w];
    }

    return current.words;
  }
}

class TrieNode {
  constructor() {
    this.children = {};
    this.words = [];
  }
}
