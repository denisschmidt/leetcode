/*
146. LRU Cache

Design and implement a data structure for Least Recently Used (LRU) cache.
It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity,
it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 capacity)

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

*/

class DataNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Double Linked List
class DataList {
  constructor() {
    this.head = new DataNode();
    this.tail = new DataNode();

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  insert(node) {
    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
  }

  getLast() {
    return this.tail.prev;
  }
}

// Используем Hash Map и Double List
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;

    // hash
    this.map = new Map();

    // Doubly linked list
    this.dataList = new DataList();
  }

  // Если элемента нету вернем -1
  // Если есть то удалим из Linked List и снова добавим в него тем самым перемещаем его в конец
  // Возвращаем значение
  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }

    const node = this.map.get(key);

    // Продвигаем узел до хвоста списка
    this.dataList.remove(node);
    this.dataList.insert(node);

    // возвращаем значение
    return node.value;
  }

  // добавиляем элементы в конец списка перед хвостом
  // добавляем элемент в хэш таблицу
  // Как только мы добавляем новые элементы - наш первый добавленный элемент перемещается в направлении заголовка.
  // Если список достигает емкости, мы удаляем следующий элемент в заголовок (и из словаря) и добавляем его перед хвостом
  put(key, value) {
    if (this.capacity === 0) {
      return;
    }

    let node;

    //  Если значение уже было в кэше вернем его
    if (this.map.has(key)) {
      node = this.map.get(key);
      node.value = value;
      this.dataList.remove(node);
      this.dataList.insert(node);
      return;
    }

    // Если в кэше уже N элементов, то вытесним самый старый
    if (this.map.size === this.capacity) {
      node = this.dataList.getLast();
      this.map.delete(node.key);
      this.dataList.remove(node);
    }

    // Добавим в таблицу, и в очередь
    node = new DataNode(key, value);
    this.map.set(key, node);
    this.dataList.insert(node);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
