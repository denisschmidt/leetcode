/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
  Input: "()"
  Output: true

Example 2:
  Input: "()[]{}"
  Output: true

Example 3:
  Input: "(]"
  Output: false

Example 4:
  Input: "([)]"
  Output: false

Example 5:
  Input: "{[]}"
  Output: true

 */

const validBraces = (str) => {
  let queueOpenSymbols = [], countOpenSymbols = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
      queueOpenSymbols.push(str[i]);
    } else {
      countOpenSymbols = queueOpenSymbols.length;

      if ((str[i] === '}' && queueOpenSymbols[countOpenSymbols - 1] === '{')
        || (str[i] === ']' && queueOpenSymbols[countOpenSymbols - 1] === '[')
        || (str[i] === ')' && queueOpenSymbols[countOpenSymbols - 1] === '('))
      {
        queueOpenSymbols.pop();
      }
    }
  }
  return !queueOpenSymbols.length;
}

const res = validBraces('{}[]()');

console.log('---', res);
