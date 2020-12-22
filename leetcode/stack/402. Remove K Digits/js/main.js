// Mono Stack

// Time O(N)
// Space O(N)
const removeKdigits = (num, k) => {
  let stack = [];
  let n = num.length;

  for (let i = 0; i < n; i++) {
    while (k > 0 && stack.length && last(stack) > num[i]) {
      stack.pop();
      k--;
    }

    stack.push(num[i]);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  while (stack[0] == '0' && stack.length > 0) {
    stack.shift();
  }

  return stack.length == 0 ? '0' : stack.join('');

  function last(x) {
    return x[x.length - 1];
  }
};
