/*
Design your implementation of the linked list.
You can choose to use the singly linked list or the doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list.
Assume all nodes in the linked list are 0-indexed.

Implement these functions in your linked list class:

  get(index) : Get the value of the index-th node in the linked list. If the index is invalid, return -1.
  addAtHead(val) : Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
  addAtTail(val) : Append a node of value val to the last element of the linked list.
  addAtIndex(index, val) : Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. If index is negative, the node will be inserted at the head of the list.
  deleteAtIndex(index) : Delete the index-th node in the linked list, if the index is valid.

Example:

  MyLinkedList linkedList = new MyLinkedList();
  linkedList.addAtHead(1);
  linkedList.addAtTail(3);
  linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
  linkedList.get(1);            // returns 2
  linkedList.deleteAtIndex(1);  // now the linked list is 1->3
  linkedList.get(1);            // returns 3

Note:
  All values will be in the range of [1, 1000].
  The number of operations will be in the range of [1, 1000].
  Please do not use the built-in LinkedList library.

 */

class MyLinkedList {
  constructor() {
    // Двойной связанный список
    this.size = 0;
    this.head = new LinkNode(0);
    this.tail = new LinkNode(0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(index) {
    if (index < 0 || index >= this.size) return -1;

    let cur = this.head;

    // определяем с какой стороны поиск будет быстрее
    if (index + 1 < this.size - index) {
      for (let i = 0; i <= index; i++) cur = cur.next;
    } else {
      cur = this.tail;

      for (let i = 0; i < this.size - index; i++) cur = cur.prev;
    }

    return cur.val;
  }

  addAtHead(val) {
    let pred = this.head;
    let succ = this.head.next;

    this.size = this.size + 1;
    let node = new LinkNode(val);

    node.prev = pred;
    node.next = succ;

    pred.next = node;
    succ.prev = node;
  }

  addAtTail(val) {
    let succ = this.tail;
    let pred = this.tail.prev;

    this.size = this.size + 1;
    let node = new ListNode(val);
    node.prev = pred;
    node.next = succ;

    pred.next = node;
    succ.prev = node;
  }

  addAtIndex(index, val) {
    if (index > this.size) return;

    if (index < 0) index = 0;

    let pred;
    let succ;

    if (index < this.size - index) {
      pred = this.head;

      for (let i = 0; i < index; i++) {
        pred = pred.next;
      }

      succ = pred.next;
    } else {
      succ = this.tail;

      for (let i = 0; i < this.size - index; i++) {
        succ = succ.prev;
      }

      pred = succ.prev;
    }

    this.size = this.size + 1;

    let node = new LinkNode(val);
    node.prev = pred;
    node.next = succ;

    pred.next = node;
    succ.prev = node;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;

    let succ;
    let pred;

    if (index < this.size - index) {
      pred = this.head;

      for (let i = 0; i < index; i++) pred = pred.next;
      succ = pred.next.next;
    } else {
      succ = this.tail;

      for (let i = 0; i < this.size - index - 1; i++) succ = succ.prev;
      pred = succ.prev.prev;
    }

    this.size = this.size - 1;
    pred.next = succ;
    succ.prev = pred;
  }
}

class LinkNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class MyLinkedList2 {
  constructor() {
    this.list = new LinkNode(0);
    this.size = 0;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (index < 0 || index >= this.size) return -1;

    let a = this.list;

    for (let i = 0; i < index + 1; ++i) a = a.next;

    return a.val;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    this.addAtIndex(0, val);
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    this.addAtIndex(this.size, val);
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index > this.size) return;

    if (index < 0) index = 0;

    this.size = this.size + 1;

    let a = this.list;
    for (let i = 0; i < index; ++i) a = a.next;

    let node = new LinkNode(val);
    node.next = a.next ? a.next : null;
    a.next = node;
  }

  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;

    let a = this.list;

    this.size = this.size - 1;

    for (let i = 0; i < index; i++) a = a.next;

    a.next = a.next.next;
  }
}

class LinkNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
