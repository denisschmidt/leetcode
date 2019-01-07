/*

Given a string, find the length of the longest substring without repeating characters.


Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", which the length is 3.

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.


Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  let countArr = [];
  let currentStr = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (currentStr.indexOf(s[j]) === -1) {
        currentStr = currentStr + s[j];
      } else {
        countArr.push(currentStr.length);
        currentStr = '';
        break;
      }
    }
  }
  countArr.push(currentStr.length);
  return countArr.sort((a, b) => b - a)[0];
};

const res = lengthOfLongestSubstring('abcabcbb');
console.log('---', res);
