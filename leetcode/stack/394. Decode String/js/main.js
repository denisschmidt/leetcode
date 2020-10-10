/*

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. 
For example, there won't be input like 3a or 2[4].

Examples:
  s = "3[a]2[bc]", return "aaabcbc".
  s = "3[a2[c]]", return "accaccacc".
  s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

*/

// Time O(N)
// Space O(N)
const decodeString = str => {
  if (str.length == 0) return '';

  let strStack = [];
  let countStack = [];
  let n = str.length;
  let curStr = '';

  for (let i = 0; i < n; i++) {
    if (str[i] == '[') {
      strStack.push(curStr);
      curStr = '';
    } else if (str[i] == ']') {
      let prevStr = strStack.pop() || '';
      let cnt = countStack.pop();

      curStr = prevStr + repeatStr(curStr, cnt);
    } else if (isNaN(str[i])) {
      curStr += str[i];
    } else {
      let count = 0;
      while (!isNaN(str[i])) {
        count = 10 * count + parseInt(str[i]);
        i++;
      }
      i--;
      countStack.push(count);
    }
  }

  return curStr;

  function repeatStr(s, r) {
    let res = '';
    for (let i = 0; i < r; i++) res += s;
    return res;
  }
};
