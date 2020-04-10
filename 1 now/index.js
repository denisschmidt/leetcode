/**
 * initialize your data structure here.
 */
class MaxStack {
  constructor() {
    this.stack = [];
    this.maxStack = [];
  }

  push(x) {
    this.stack.push(x);

    if (!this.maxStack.length || getLast(this.maxStack) < x) {
      this.maxStack.push([x, 1]);
    } else if (getLast(this.maxStack) == x) {
      getLast(this.maxStack)[1]++;
    }
  }

  pop() {
    if (getLast(this.stack) == getLast(this.maxStack)[0]) {
      let [_, cnt] = getLast(this.maxStack);

      if (cnt > 1) {
        getLast(this.maxStack)[1]--;
      } else {
        this.maxStack.pop();
      }
    }

    return this.stack.pop();
  }

  top() {
    return getLast(this.stack);
  }

  peekMax() {
    return getLast(this.maxStack)[0];
  }

  popMax() {
    if (getLast(this.maxStack)[1] > 1) {
      getLast(this.maxStack)[1]--;
      return getLast(this.maxStack)[0];
    }

    return this.maxStack.pop()[0];
  }
}

function getLast(arr) {
  return arr[arr.length - 1];
}
