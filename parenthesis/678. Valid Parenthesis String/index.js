/*
Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. 
We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.

Any right parenthesis ')' must have a corresponding left parenthesis '('.

Left parenthesis '(' must go before the corresponding right parenthesis ')'.

'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.

An empty string is also valid.

Example 1:
  Input: "()"
  Output: True

Example 2:
  Input: "(*)"
  Output: True

Example 3:
  Input: "(*))"
  Output: True

Note:
  The string size will be in the range [1, 100].

 */

// Time O(N)
// Space O(N)
const checkValidString = str => {
  let open = [];
  let star = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') {
      open.push(i);
    } else if (str[i] == '*') {
      star.push(i);
    } else {
      if (!open.length && !star.length) return false;

      if (open.length) {
        open.pop();
      } else if (star.length) {
        star.pop();
      }
    }
  }

  while (open.length && star.length) {
    if (open.pop() > star.pop()) return false;
  }

  return !open.length;
};
