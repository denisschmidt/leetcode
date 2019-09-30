/*
Implement a MapSum class with insert, and sum methods.

For the method insert, you'll be given a pair of (string, integer).

The string represents the key and the integer represents the value. 
If the key already existed, then the original key-value pair will be overridden to the new one.

For the method sum, you'll be given a string representing the prefix, and you need to return the sum of all the pairs' 
value whose key starts with the prefix.

Example 1:  
  Input: insert("apple", 3), Output: Null
  Input: sum("ap"), Output: 3
  Input: insert("app", 2), Output: Null
  Input: sum("ap"), Output: 5

 */

// Time: каждая операция вставки - это O(K), где K - длина ключа. Каждая сумма операции O(K).
// Space: O(K)
class MapSum {
  constructor() {
    this.root = new TrieNode();
    this.map = new Map();
  }

  insert(key, value) {
    let delta = value - (this.map.get(key) || 0);

    let current = this.root;
    this.map.set(key, value);

    current.sum += delta;

    for (let k of key) {
      if (!(k in current.children)) {
        current.children[k] = new TrieNode();
      }
      current = current.children[k];
      current.sum += delta;
    }

    return null;
  }

  sum(prefix) {
    let current = this.root;

    for (let p of prefix) {
      if (!(p in current.children)) {
        return 0;
      }
      current = current.children[p];
    }

    return current.sum;
  }
}

class TrieNode {
  constructor() {
    this.children = {};
    this.sum = null;
  }
}
