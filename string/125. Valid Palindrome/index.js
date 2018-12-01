/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: "race a car"
Output: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const str = s.replace(/[^A-Za-z0-9]+/g, '');
  return str.split('').reverse().join('').toLowerCase() === str.toLowerCase();
};

var isPalindrome2 = function(s) {
  let left = 0, right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true
}

console.log(isPalindrome2("A man, a plan, a canal: Panama"))
