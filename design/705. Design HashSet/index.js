/*
Design a HashSet without using any built-in hash table libraries.

To be specific, your design should include these functions:

add(value): Insert a value into the HashSet.
contains(value) : Return whether the value exists in the HashSet or not.
remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

Example:
  MyHashSet hashSet = new MyHashSet();
  hashSet.add(1);
  hashSet.add(2);
  hashSet.contains(1);    // returns true
  hashSet.contains(3);    // returns false (not found)
  hashSet.add(2);
  hashSet.contains(2);    // returns true
  hashSet.remove(2);
  hashSet.contains(2);    // returns false (already removed)

Note:
  All values will be in the range of [0, 1000000].
  The number of operations will be in the range of [1, 10000].
  Please do not use the built-in HashSet library.

 */

class MyHashSet {
  constructor() {
    this.map = [];
    this.numBuckets = 10000;
  }

  hash(val) {
    return val % this.numBuckets;
  }

  pos(key) {
    return key / this.numBuckets;
  }

  add(key) {
    const hashKey = this.hash(key);

    if (!this.map[hashKey]) {
      this.map[hashKey] = [];
    }

    if (this.map[hashKey].indexOf(key) === -1) {
      this.map[hashKey].push(key);
    }
  }

  remove(key) {
    const hashKey = this.hash(key);

    if (!this.map[hashKey]) return;

    const index = this.map[hashKey].indexOf(key);

    if (index !== -1) {
      this.map[hashKey].splice(index, 1);
    }
  }

  contains(key) {
    const hashKey = this.hash(key);

    if (!this.map[hashKey] || this.map[hashKey].indexOf(key) === -1) return false;
    return true;
  }
}
