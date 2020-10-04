/*

  Создаем стек для операции и чисел
  Итерируемся по массиву и если операцию можно рассчитать, то мы ее расчитываем пока это возможно.
  Записываем новое значение в стек

*/

// Time O(N)
// Space O(N)
const calculate = s => {
  let opers = [];
  let nums = [];
  let map = new Map();

  map.set('+', 0);
  map.set('-', 0);
  map.set('*', 1);
  map.set('/', 1);

  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') continue;

    if (s[i] == '(') {
      opers.push('(');
    } else if (s[i] == ')') {
      while (opers[opers.length - 1] != '(') {
        nums.push(applyOp(opers.pop(), nums.pop(), nums.pop()));
      }

      opers.pop();
    } else if (map.has(s[i])) {
      while (opers.length && map.get(opers[opers.length - 1]) >= map.get(s[i])) {
        nums.push(applyOp(opers.pop(), nums.pop(), nums.pop()));
      }

      opers.push(s[i]);
    } else {
      let buffer = '';

      while (i < s.length && s[i] >= 0 && s[i] <= 9) {
        buffer += s[i++];
      }

      nums.push(parseInt(buffer));
      i--;
    }
  }

  while (opers.length) {
    nums.push(applyOp(opers.pop(), nums.pop(), nums.pop()));
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
};
