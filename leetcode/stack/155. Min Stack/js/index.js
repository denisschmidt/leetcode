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
    this.st = [];
    this.min = [];
  }

  push(x) {
    this.st.push(x);
    if (this.min.length == 0 || this.last(this.min) >= x) {
      this.min.push(x);
    }
  }

  pop() {
    let x = this.st.pop();
    if (this.last(this.min) == x) {
      this.min.pop();
    }
  }

  top() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.st[this.st.length - 1];
  }

  last(x) {
    return x[x.length - 1];
  }

  isEmpty() {
    return this.st.length == 0;
  }

  getMin() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.last(this.min);
  }
}
