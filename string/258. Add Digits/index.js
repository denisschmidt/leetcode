/*
258. Add Digits

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:
  Input: 38
  Output: 2
  Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
             Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?
 */

// Time O(N)
// Space O(1)
const addDigits = function(num) {
  while (num > 9) {
    let x = num % 10;
    let y = Math.floor((num - x) / 10);
    num = x + y;
  }
  return num;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(1)
// Space O(1)
const addDigits2 = function(num) {
  if (num === 0) return 0;
  return num % 9 === 0 ? 9 : num % 9;
};
