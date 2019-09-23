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
const decodeString = function(str) {
  const s1 = []; // countStack
  const s2 = []; // strStack
  let i = 0;
  let ans = '';

  while (i < str.length) {
    if (Number.isInteger(Number(str[i]))) {
      let count = 0;

      while (Number.isInteger(Number(str[i]))) {
        let tmp = Number(str[i]);
        count = 10 * count + tmp;
        i++;
      }

      s1.push(count);
    } else if (str[i] === '[') {
      s2.push(ans);
      ans = '';
      i++;
    } else if (str[i] === ']') {
      let s = getStr(ans, s1.pop());
      ans = s2.pop() + s;
      i++;
    } else {
      ans += str[i];
      i++;
    }
  }

  return ans;
};

function getStr(str, num) {
  let ans = '';
  for (let i = 0; i < num; i++) {
    ans += str;
  }
  return ans;
}
