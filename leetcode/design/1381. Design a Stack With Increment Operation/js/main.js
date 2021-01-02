class CustomStack {
  constructor(maxSize) {
    this.stack = [];
    this.maxSize = maxSize;
  }

  push(x) {
    if (this.stack.length < this.maxSize) {
      this.stack.push(x);
    }
  }

  pop() {
    if (this.stack.length == 0) return -1;
    return this.stack.pop();
  }

  increment(k, val) {
    let i = 0;

    while (i < this.stack.length && k > 0) {
      this.stack[i] = this.stack[i] + val;
      k--;
      i++;
    }
  }
}
