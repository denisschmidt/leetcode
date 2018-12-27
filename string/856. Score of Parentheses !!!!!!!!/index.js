
/*
Given a balanced parentheses string S, compute the score of the string based on the following rule:

() has score 1
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.

Example 1:
  Input: "()"
  Output: 1

Example 2:
  Input: "(())"
  Output: 2

Example 3:
  Input: "()()"
  Output: 2

Example 4:
  Input: "(()(()))"
  Output: 6

 */

/**
 * @param {string} s
 * @return {number}
 */
const scoreOfParentheses = function(s) {
  let stack = [];
  stack.push(0);

  for (let char of s) {
    if (char === '(') {
      stack.push(0);
    } else {
      const i = stack.pop();
      const j = stack.pop();
      stack.push(j + Math.max(i * 2, 1));
    }
  }
  return stack[stack.length - 1];
};

const res = scoreOfParentheses('(()(()))');

console.log('---', res);


const scoreOfParentheses2 = (s) => {
  let res = 0, depth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      depth++;
    } else {
      depth--;
    }
    if (s[i] === '(' && s[i + 1] === ')') {
      res += 1 << (depth - 1);
    }
  }
  return res;
}

const res2 = scoreOfParentheses2('(()(()))');

console.log('---', res2);
