/*
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:
  Input: "(()"
  Output: 2
  Explanation: The longest valid parentheses substring is "()"

Example 2:
  Input: ")()())"
  Output: 4
  Explanation: The longest valid parentheses substring is "()()"

 */

// Time O(N)
// Space O(N)
const longestValidParentheses = s => {
  const dp = Array(s.length).fill(0);
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      }

      // Пример => (())
      // Первое условие проверяет что мы не вышли за границы
      // Второе условие что скобка равно (
      else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
        dp[i] = dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
      }
    }

    ans = Math.max(ans, dp[i]);
  }
  return ans;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
// Space O(N)
const longestValidParentheses2 = s => {
  const stack = [-1];
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();

      if (!stack.length) {
        stack.push(i);
      } else {
        // (() == 2
        ans = Math.max(ans, i - stack[stack.length - 1]);
      }
    }
  }

  return ans;
};
