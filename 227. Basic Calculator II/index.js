/*
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

Example 1:
  Input: "3+2*2"
  Output: 7

Example 2:
  Input: " 3/2 "
  Output: 1

Example 3:
  Input: " 3+5 / 2 "
  Output: 5

Note:
  You may assume that the given expression is always valid.
  Do not use the eval built-in library function.

 */

// Time O(N)
// Space O(N)
const calculate = str => {
  if (str.length === 0) return 0;

  const nums = [];
  const ops = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    }

    if (str[i] >= '0' && str[i] <= '9') {
      let buffer = '';

      while (i < str.length && str[i] >= '0' && str[i] <= '9') {
        buffer += str[i];
        i++;
      }

      nums.push(parseInt(buffer));

      // обязательно нужно уменьшить индекс
      i--;
    } else if (str[i] === '+' || str[i] === '-' || str[i] === '*' || str[i] === '/') {
      //
      // В цикле до тех пор пока в стеке оператор больше или равен текущему оператору
      // Расчитываем значение для двух значений из стека
      //
      while (ops.length && hasPrecedence(str[i], ops[ops.length - 1])) {
        nums.push(applyOp(ops.pop(), nums.pop(), nums.pop()));
      }

      ops.push(str[i]);
    }
  }

  // выполняем все операции над числами с конца
  while (ops.length) {
    nums.push(applyOp(ops.pop(), nums.pop(), nums.pop()));
  }

  return nums.pop();

  function applyOp(op, b, a) {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        if (b === 0) {
          throw 'Cannot divide by zero';
        }
        return Math.floor(a / b);
    }
    return 0;
  }

  // Returns true if 'op2' has higher or same precedence as 'op1',
  // otherwise returns false.
  function hasPrecedence(op1, op2) {
    if (op2 === '(' || op2 === ')') {
      return false;
    } else if ((op1 === '*' || op1 === '/') && (op2 === '+' || op2 === '-')) {
      return false;
    }
    return true;
  }
};
