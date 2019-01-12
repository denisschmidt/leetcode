/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  const sortArr = strs.sort((a, b) => a.length - b.length);
  let str = sortArr[0];
  let i = 1;
  let isTrue = true;

  if (!sortArr.length) {
    return '';
  }

  while (isTrue && i < sortArr.length) {
    if (str === sortArr[i].substr(0, str.length)) {
      result = str;
    } else {
      i = 0;
      str = str.substr(0, str.length - 1);
      result = '';
    }
    if (i >= sortArr.length && isTrue) {
      isTrue = false;
      i = 0;
    }
    i++;
  }
  return str;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
