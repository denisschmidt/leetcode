// Stack
// Time O(N)
// Space O(N)
const validBraces = str => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(')');
    } else if (str[i] === '{') {
      stack.push('}');
    } else if (str[i] === '[') {
      stack.push(']');
    } else if (!stack.length || stack.pop() !== str[i]) {
      return false;
    }
  }

  return !stack.length;
};
