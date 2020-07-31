/*

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Note:
  Division between two integers should truncate toward zero.
  The given RPN expression is always valid. 
  That means the expression would always evaluate to a result and there won't be any divide by zero operation.

Example 1:
  Input: ["2", "1", "+", "3", "*"]
  Output: 9
  Explanation: ((2 + 1) * 3) = 9

Example 2:
  Input: ["4", "13", "5", "/", "+"]
  Output: 6
  Explanation: (4 + (13 / 5)) = 6

Example 3:
  Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
  Output: 22
  Explanation: 
    ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
  = ((10 * (6 / (12 * -11))) + 17) + 5
  = ((10 * (6 / -132)) + 17) + 5
  = ((10 * 0) + 17) + 5
  = (0 + 17) + 5
  = 17 + 5
  = 22

*/

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
