/*

You are given a string s that consists of lower case English letters and brackets. 

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.

Example 1:
  Input: s = "(abcd)"
  Output: "dcba"

Example 2:
  Input: s = "(u(love)i)"
  Output: "iloveu"
  Explanation: The substring "love" is reversed first, then the whole string is reversed.

Example 3:
  Input: s = "(ed(et(oc))el)"
  Output: "leetcode"
  Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.

Example 4:
  Input: s = "a(bcdefghijkl(mno)p)q"
  Output: "apmnolkjihgfedcbq"
 

Constraints:
  0 <= s.length <= 2000
  s only contains lower case English characters and parentheses.
  It's guaranteed that all parentheses are balanced.

*/

// Time O(N^2)
// Space O(N^2)
const reverseParentheses = s => {
  let stack = [[]];

  s.split('').forEach(x => {
    if (x == '(') {
      stack.push([]);
    } else if (x == ')') {
      stack[stack.length - 1].reverse();

      if (stack.length >= 2) {
        stack[stack.length - 2] = [...stack[stack.length - 2], ...stack.pop()];
      }
    } else {
      stack[stack.length - 1].push(x);
    }
  });

  return stack[0].join('');
};

// Делаем реверс каждой скобочной последовательности. стек нужен как раз для глубины
// Time O(N^2)
// Space O(N)
const reverseParentheses_II = function (s) {
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
