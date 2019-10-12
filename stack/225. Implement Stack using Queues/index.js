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
class MyStack {
  constructor() {
    this._q1 = [];
    this._q2 = [];
  }

  push(x) {
    this._q1.push(x);
  }

  /*
    Поскольку очередь представляет собой структуру данных FIFO (первым пришел - первым вышел), 
    последний вставленный элемент может быть удален только после удаления всех элементов, кроме него. 
    
    По этой причине нам нужно поддерживать дополнительную очередь q2, которая будет служить временным хранилищем для постановки в очередь 
    удаленных элементов из q1. 
    
    Последний вставленный элемент в q2 остается верхним. 
    
    Затем алгоритм удаляет последний элемент в q1. 
    
    Мы поменяем q1 на q2, чтобы избежать копирования всех элементов из q2 в q1.
   */
  pop() {
    while (this._q1.length > 1) {
      let top = this._q1.shift();
      this._q2.push(top);
    }

    let top = this._q1.shift();
    let temp = this._q1;
    this._q1 = this._q2;
    this._q2 = temp;
    return top;
  }

  top() {
    return this._q1[this._q1.length - 1];
  }

  empty() {
    return !this._q1.length;
  }
}
