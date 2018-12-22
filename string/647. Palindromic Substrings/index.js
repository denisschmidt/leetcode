/*
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even
 they consist of same characters.

Example 1:
  Input: "abc"
  Output: 3
  Explanation: Three palindromic strings: "a", "b", "c".

Example 2:
  Input: "aaa"
  Output: 6
  Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalidrome = s => {
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const countSubstrings = s => {
  let count = 0, str = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j <= s.length; j++) {
      str = str + s[j];
      if (isPalidrome(str)) {
        count++;
      }
    }
    str = '';
  }
  return count;
};

const res = countSubstrings('aaa');
