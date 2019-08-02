/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.


Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
 */

/**
 * initialize your data structure here.
 */
const MinStack = function() {
  this.q1 = [];
  this.q2 = [];
  this.min = Number.MAX_VALUE;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.min = Math.min(this.min, x);
  this.q1.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.min = Number.MAX_VALUE;
  while (this.q1.length > 1) {
    let top = this.q1.shift();
    this.q2.push(top);
    this.min = Math.min(this.min, top);
  }
  let pop = this.q1.shift();

  this.swap();
  return pop;
};

MinStack.prototype.swap = function() {
  let tmp = this.q1;
  this.q1 = this.q2;
  this.q2 = tmp;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  console.log('---', this.q1);
  return this.q1[this.q1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
const a = minStack.getMin();
minStack.pop();
const b = minStack.top();
const c = minStack.getMin();

console.log('----', a, b, c);
