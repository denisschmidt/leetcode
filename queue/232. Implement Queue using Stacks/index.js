/*
Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.

Example:
  MyQueue queue = new MyQueue();

  queue.push(1);
  queue.push(2);

  queue.peek();  // returns 1
  queue.pop();   // returns 1
  queue.empty(); // returns false

Notes:

  You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
  Depending on your language, stack may not be supported natively.
  You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
  You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).
 */

class MyQueue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  push(x) {
    this.s1.push(x);
  }

  pop() {
    this._shift();
    return this.s2.pop();
  }

  peek() {
    this._shift();
    return this.s2[this.s2.length - 1];
  }

  empty() {
    return !this.s2.length && !this.s1.length;
  }

  _shift() {
    if (this.s2.length) return;

    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop());
    }
  }
}
