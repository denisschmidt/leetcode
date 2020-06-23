/*

Design your implementation of the circular double-ended queue (deque).

Your implementation should support following operations:

MyCircularDeque(k): Constructor, set the size of the deque to be k.
insertFront(): Adds an item at the front of Deque. Return true if the operation is successful.
insertLast(): Adds an item at the rear of Deque. Return true if the operation is successful.
deleteFront(): Deletes an item from the front of Deque. Return true if the operation is successful.
deleteLast(): Deletes an item from the rear of Deque. Return true if the operation is successful.
getFront(): Gets the front item from the Deque. If the deque is empty, return -1.
getRear(): Gets the last item from Deque. If the deque is empty, return -1.
isEmpty(): Checks whether Deque is empty or not. 
isFull(): Checks whether Deque is full or not.
 

Example:
  MyCircularDeque circularDeque = new MycircularDeque(3); // set the size to be 3
  circularDeque.insertLast(1);			// return true
  circularDeque.insertLast(2);			// return true
  circularDeque.insertFront(3);			// return true
  circularDeque.insertFront(4);			// return false, the queue is full
  circularDeque.getRear();  			// return 2
  circularDeque.isFull();				// return true
  circularDeque.deleteLast();			// return true
  circularDeque.insertFront(4);			// return true
  circularDeque.getFront();			// return 4
  

Note:
  All values will be in the range of [0, 1000].
  The number of operations will be in the range of [1, 1000].
  Please do not use the built-in Deque library.

*/

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
