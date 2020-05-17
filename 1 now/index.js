var reverseParentheses = function(s) {
  let stack = [];
  let chars = s.split('');

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] == '(') {
      stack.push(i);
    } else if (chars[i] == ')') {
      let start = stack.pop() + 1;
      let end = i;

      while (start < end) {
        swap(chars, start, end);
        start++;
        end--;
      }
    }
  }

  let ans = '';

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] != '(' && chars[i] != ')') {
      ans += chars[i];
    }
  }

  return ans;

  function swap(nums, i, j) {
    return ([nums[i], nums[j]] = [nums[j], nums[i]]);
  }
};
