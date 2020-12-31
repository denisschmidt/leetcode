/*

  Steps:

  1) Create two stacks for operations and numbers

  2) Iterate thoughts over the array  
  
  3) While it's possible calculate prev operation's and add this new value to our stack of numbers
  
  4) Continue iterating

*/

// Time O(N)
// Space O(N)
const calculate = s => {
  let opers = [];
  let nums = [];
  let map = { '+': 0, '-': 0, '*': 1, '/': 1, '(': -1 };

  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') continue;

    if (s[i] == '(') {
      opers.push('(');
    } else if (s[i] == ')') {
      while (opers[opers.length - 1] != '(') {
        nums.push(applyOp(opers.pop(), nums.pop(), nums.pop()));
      }

      opers.pop();
    } else if (s[i] in map) {
      while (opers.length && map[opers[opers.length - 1]] >= map[s[i]]) {
        nums.push(applyOp(opers.pop(), nums.pop(), nums.pop()));
      }

      if (s[i] == '-' && !opers.length && !nums.length) {
        nums.push(0);
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
