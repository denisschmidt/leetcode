/*
Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

The expression string contains only non-negative integers, +, -, *, / operators , open ( and closing parentheses ) and empty spaces . The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-2147483648, 2147483647].

Some examples:

"1 + 1" = 2
" 6-4 / 2 " = 4
"2*(5+5*2)/3+(6/2+8)" = 21
"(2+6* 3+5- (3*14/7+2)*5)+3"=-12
 

Note: Do not use the eval built-in library function.
 */

// Time O(N)
// Space O(N)
const calculate = s => {
  if (!s || s.length === 0) return 0;

  const nums = [];
  const ops = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      continue;
    }

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
      //
      while (ops.length && hasPrecedence(s[i], ops[ops.length - 1])) {
        nums.push(calcSum(ops.pop(), nums.pop(), nums.pop()));
      }

      // отрицательные числа’
      if (s[i] === '-') {
        if (nums.length === 0) {
          // если других числе нет только делаем 0 - 7 чтобы получить отрицательное число
          nums.push(0);
        } else {
          // добавляем отрицательное число перед скобкой
          let index = i - 1;
          while (index >= 0 && s[index] === ' ') {
            index--;
          }
          if (s[index] === '(') {
            nums.push(0);
          }
        }
      }

      ops.push(s[i]);
    }
  }
  console.log(nums, ops);

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

  function hasPrecedence(op1, op2) {
    if (op2 === '(' || op2 === ')') {
      return false;
    } else if ((op1 === '*' || op1 === '/') && (op2 === '+' || op2 === '-')) {
      return false;
    }
    return true;
  }
};

const res = calculate('1 - (-7)');
console.log(res);
