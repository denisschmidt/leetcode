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

// Time O(N)
// Space O(1)
const isPalindrome = s => {
  s = s.replace(/[^A-Za-z0-9]+/g, '');

  if (s.length == 0) return true;

  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l++].toLowerCase() != s[r--].toLowerCase()) return false;
  }

  return true;
};
