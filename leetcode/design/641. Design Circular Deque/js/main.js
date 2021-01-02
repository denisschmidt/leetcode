// Implementation of Deque using doubly linked list
// Time O(1)
// Space O(K)
class MyCircularDeque {
  constructor(k) {
    this.limit = k;
    this.k = k;

    this.front = null;
    this.rear = null;
  }

  insertFront(value) {
    if (this.isFull()) return false;

    let newNode = new List(value);

    if (this.front == null) {
      this.rear = newNode;
      this.front = newNode;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }

    this.limit--;

    return true;
  }

  insertLast(value) {
    if (this.isFull()) return false;

    let newNode = new List(value);

    if (this.rear == null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      newNode.prev = this.rear;
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.limit--;

    return true;
  }

  deleteFront() {
    if (this.isEmpty()) return false;

    let temp = this.front;

    this.front = temp.next;

    if (this.front == null) {
      this.rear = null;
    } else {
      this.front.prev = null;
    }

    this.limit++;

    return true;
  }

  deleteLast() {
    if (this.isEmpty()) return false;

    let tmp = this.rear;

    this.rear = tmp.prev;

    if (this.rear == null) {
      this.front = null;
    } else {
      this.rear.next = null;
    }

    this.limit++;

    return true;
  }

  // Function to delete all the elements from Deque
  erase() {
    this.rear = null;

    while (this.front != null) {
      this.front = this.front.next;
    }

    this.limit = this.k;
  }

  getFront() {
    if (this.isEmpty()) return -1;
    return this.front.value;
  }

  getRear() {
    if (this.isEmpty()) return -1;
    return this.rear.value;
  }

  isEmpty() {
    return this.front == null;
  }

  isFull() {
    return this.limit == 0;
  }
}

class List {
  constructor(value, key) {
    this.value = value;
    this.key = key;
    this.prev = null;
    this.next = null;
  }
}
