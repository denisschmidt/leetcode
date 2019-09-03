/*

Given an input string, reverse the string word by word.

Example 1:
  Input: "the sky is blue"
  Output: "blue is sky the"

Example 2:
  Input: "  hello world!  "
  Output: "world! hello"
  Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:
  Input: "a good   example"
  Output: "example good a"
  Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Note:

A word is defined as a sequence of non-space characters.
Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Follow up:

For C programmers, try to solve it in-place in O(1) extra space.

 */

const reverseWords = function(s) {
  let arr = s.trim().split(' ');

  if (arr.length === 0) return '';

  if (arr.length === 1) return arr[0];

  let ans = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    let char = arr[i];
    if (char === '') continue;
    ans = ans + ' ' + char;
  }

  return ans;
};
