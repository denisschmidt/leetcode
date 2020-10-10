// Time O(N)
// Space O(N)
const evalRPN = tokens => {
  let stack = [];
  let n = tokens.length;

  for (let i = 0; i < n; i++) {
    if (isNaN(tokens[i])) {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(calcSum(tokens[i], b, a));
    } else {
      stack.push(parseInt(tokens[i]));
    }
  }

  return stack.pop();

  function calcSum(op, a, b) {
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
        return ~~(a / b);
    }
    return 0;
  }
};
