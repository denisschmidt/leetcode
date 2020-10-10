/*
Design a max stack that supports push, pop, top, peekMax and popMax.

push(x) -- Push element x onto stack.
pop() -- Remove the element on top of the stack and return it.
top() -- Get the element on the top.
peekMax() -- Retrieve the maximum element in the stack.
popMax() -- Retrieve the maximum element in the stack, and remove it.
            If you find more than one maximum elements, only remove the top-most one.

Example 1:
  MaxStack stack = new MaxStack();
  stack.push(5);
  stack.push(1);
  stack.push(5);
  stack.top(); -> 5
  stack.popMax(); -> 5
  stack.top(); -> 1
  stack.peekMax(); -> 5
  stack.pop(); -> 1
  stack.top(); -> 5

Note:
-1e7 <= x <= 1e7
  Number of operations won't exceed 10000.
  The last four operations won't be called when stack is empty.

 */

// Time O(N) - popMax, other - O(1)
// Space O(N)
class MaxStack {
  constructor() {
    this.stack = [];
    this.maxStack = [];
  }

  push(x) {
    let max = this.maxStack.length ? Math.max(x, getLast(this.maxStack)) : x;
    this.stack.push(x);
    this.maxStack.push(max);
  }

  pop() {
    this.maxStack.pop();
    return this.stack.pop();
  }

  top() {
    return getLast(this.stack);
  }

  peekMax() {
    return getLast(this.maxStack);
  }

  popMax() {
    let max = getLast(this.maxStack);
    let buffer = [];

    while (this.top() != max) {
      buffer.push(this.pop());
    }

    this.pop();

    while (buffer.length > 0) {
      this.push(buffer.pop());
    }

    return max;
  }
}

function getLast(x) {
  return x[x.length - 1];
}
