/*

Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

Example:  
  MyHashMap hashMap = new MyHashMap();
  hashMap.put(1, 1);          
  hashMap.put(2, 2);         
  hashMap.get(1);            // returns 1
  hashMap.get(3);            // returns -1 (not found)
  hashMap.put(2, 1);          // update the existing value
  hashMap.get(2);            // returns 1 
  hashMap.remove(2);          // remove the mapping for 2
  hashMap.get(2);            // returns -1 (not found) 

Note:
  All keys and values will be in the range of [0, 1000000].
  The number of operations will be in the range of [1, 10000].
  Please do not use the built-in HashMap library.

*/

class MyHashMap {
  constructor() {
    this.keyRange = 10000;
    this.range = [];
  }

  hash(value) {
    return value % this.range;
  }

  put(key, value) {
    let h = this.hash(key);

    if (!this.range[h]) {
      this.range[h] = new LinkedList();
    }

    this.range[h].insert(key, value);
  }

  get(key) {
    let h = this.hash(key);
    if (this.range[h]) {
      return this.range[h].search(key);
    }
    return -1;
  }

  remove(key) {
    let h = this.hash(key);
    if (this.range[h]) {
      this.range[h].remove(key);
    }
  }
}

class ListNode {
  constructor(key, value) {
    this.value = value;
    this.key = key;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new ListNode();
  }

  insert(key, value) {
    let cur = this.head;
    let prev = null;
    while (cur != null) {
      if (cur.key == key) {
        cur.value = value;
        return;
      }
      prev = cur;
      cur = cur.next;
    }
    prev.next = new ListNode(key, value);
  }

  search(key) {
    let cur = this.head;

    while (cur != null) {
      if (cur.key == key) {
        return cur.value;
      }
      cur = cur.next;
    }
    return -1;
  }

  getLast() {
    return this.tail.value;
  }

  remove(key) {
    let cur = this.head;
    let prev = null;

    while (cur != null) {
      if (cur.key == key) {
        prev.next = cur.next;
        break;
      }
      prev = cur;
      cur = cur.next;
    }
  }
}
