/*
Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.

Example:

  MyStack stack = new MyStack();
  
  stack.push(1);
  stack.push(2);  
  stack.top();   // returns 2
  stack.pop();   // returns 2
  stack.empty(); // returns false

Notes:

You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. 
You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
 */

/**
 * Initialize your data structure here.
 */

// TWO Queues === ONE STACK
const MyStack = function() {
  this._q1 = [];
  this._q2 = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this._q1.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
// Time complexity : O(n). The algorithm dequeues N elements from q1 and enqueues n - 1 elements to q2,
// where N is the stack size. This gives 2N - 1 operations.
// Space complexity : O(1).
MyStack.prototype.pop = function() {
  while (this._q1.length > 1) {
    let top = this._q1.shift();
    this._q2.push(top);
  }
  const top = this._q1.shift();
  let temp = this._q1;
  this._q1 = this._q2;
  this._q2 = temp;
  return top;
};

/**
 * Get the top element.
 * @return {number}
 */
// O(1)
MyStack.prototype.top = function() {
  return this._q1[this._q1.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
// O(1)
MyStack.prototype.empty = function() {
  return !this._q1.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

const obj = new MyStack();
obj.push(1);
obj.push(2);
obj.push(3);

const param_2 = obj.top();
const param_3 = obj.pop();
const param_4 = obj.pop();

console.log(param_2, param_3, param_4);
