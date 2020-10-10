/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:
  Input: 121
  Output: true

Example 2:
  Input: -121
  Output: false
  Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
  Input: 10
  Output: false
  Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Follow up:
  Coud you solve it without converting the integer to a string?

 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = x.toString();
  let left = 0,
    right = str.length - 1;
  let isTrue = true;
  while (left < right) {
    if (str[left] !== str[right]) {
      isTrue = false;
      break;
    }
    left++;
    right--;
  }
  return isTrue;
};

const isPalindrome2 = function (x) {
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) return false;
  let r = 0;
  const _x = x;
  while (x > 0) {
    r = r * 10 + (x % 10);
    x = parseInt(x / 10, 10);
  }

  return r === _x;
};

const res = isPalindrome(121);
console.log('---', res);

const res2 = isPalindrome2(121);
console.log('---', res2);
