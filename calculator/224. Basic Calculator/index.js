/*
Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

Example 1:

  Input: "1 + 1"
  Output: 2

Example 2:
  Input: " 2-1 + 2 "
  Output: 3

Example 3:
  Input: "(1+(4+5+2)-3)+(6+8)"
  Output: 23

Note:
  You may assume that the given expression is always valid.
  Do not use the eval built-in library function.

 */

/*

  Создаем стек для операции и чисел
  Итерируемся по массиву и если операцию можно рассчитать, то мы ее расчитываем пока это возможно.
  Записываем новое значение в стек

*/

// Time O(N)
// Space O(N)
const calculate = s => {
  if (!s || s.length === 0) return 0;

  const nums = [];
  const ops = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue;

    if (s[i] === '(') {
      ops.push(s[i]);
    } else if (s[i] === ')') {
      while (ops[ops.length - 1] !== '(') {
        nums.push(calcSum(ops.pop(), nums.pop(), nums.pop()));
      }

      // избавляемся от '(' в стеке ops
      ops.pop();
    } else if (s[i] >= '0' && s[i] <= '9') {
      let buffer = '';

      while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        buffer += s[i++];
      }

      nums.push(parseInt(buffer));

      // обязательно нужно уменьшить индекс
      i--;
    } else if (s[i] === '+' || s[i] === '-' || s[i] === '*' || s[i] === '/') {
      //
      // В цикле до тех пор пока в стеке оператор больше или равен текущему оператору
      // Расчитываем значение для двух значений из стека
      while (ops.length && hasPrecedence(ops[ops.length - 1], s[i])) {
        nums.push(calcSum(ops.pop(), nums.pop(), nums.pop()));
      }

      ops.push(s[i]);
    }
  }

  // выполняем все операции над числами с конца
  while (ops.length) {
    nums.push(calcSum(ops.pop(), nums.pop(), nums.pop()));
  }

  return nums.pop();

  function calcSum(op, b, a) {
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

  // Возвращает true, если 'op1' имеет более высокий или тот же приоритет, что и 'op2
  // otherwise returns false.
  function hasPrecedence(op1, op2) {
    if (op1 === '(' || op1 === ')') {
      return false;
    } else if ((op2 === '*' || op2 === '/') && (op1 === '+' || op1 === '-')) {
      return false;
    }
    return true;
  }
};

const res = calculate('1 - (-7)');
console.log(res);
