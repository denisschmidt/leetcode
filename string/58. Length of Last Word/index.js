/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5

 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const str = s.trim();
  const index = str.lastIndexOf(' ');
  if (!str) return 0;

  if (index === -1 && str.length) return str.length;
  return str.substr(index + 1, str.length).length;
};

const res = lengthOfLastWord('ad');
console.log(res);
