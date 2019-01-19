/*
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True

Example 2:
Input: "abca"
Output: True

Explanation: You could delete the character 'c'.

Time Complexity: O(N)O(N) where NN is the length of the string.
Each of two checks of whether some substring is a palindrome is


 */

/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function(s) {
  let left = 0,
    rigth = s.length - 1;

  while (left <= rigth) {
    if (s[left] === s[rigth]) {
      left++;
      rigth--;
    } else {
      return isPalindromic(s, left, rigth - 1) || isPalindromic(s, left + 1, rigth);
    }
  }
  return true;
};

var isPalindromic = function(s, left, right) {
  while (left <= right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

const res = validPalindrome('cbbcc');

console.log('---', res);
