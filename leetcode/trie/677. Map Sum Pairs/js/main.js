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
