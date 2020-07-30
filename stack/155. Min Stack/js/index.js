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

/*
  Создаем два стека:
    1) Первый стек будет содержать все значения
    2) Второй стек только минимальные значения

  Оптимизация:
    Если минимальное значение повторяется постоянно в minStack будет много ненужных значений. 
    Чтобы этого избежать используем след. структуру для minStack = [значение, кол-во повторений] 
  
*/

// Time All operations O(1)
// Space O(N)
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    if (this.minStack.length == 0 || this.last(this.minStack)[0] > x) {
      this.minStack.push([x, 1]);
    } else if (this.last(this.minStack)[0] == x) {
      this.last(this.minStack)[1]++;
    }
    this.stack.push(x);
  }

  pop() {
    let x = this.stack.pop();

    if (this.last(this.minStack)[0] == x) {
      this.last(this.minStack)[1]--;
      if (this.last(this.minStack)[1] <= 0) {
        this.minStack.pop();
      }
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.last(this.minStack)[0];
  }

  last(x) {
    return x[x.length - 1];
  }
}
