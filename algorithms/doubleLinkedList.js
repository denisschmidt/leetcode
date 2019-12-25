class List {
  constructor(key, value) {
    this.value = value;
    this.key = key;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = new List();
    this.tail = new List();

    // связали списки
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  remove(node) {
    // обрезаем ссылку на текущую ноду для предыдущей ноды
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  inset(node) {
    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
  }

  getLast() {
    return this.tail.prev;
  }
}

module.exports = { List, DoubleLinkedList };
