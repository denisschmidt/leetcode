/*
Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

We repeatedly make duplicate removals on S until we no longer can.

Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

Example 1:
  Input: "abbaca"
  Output: "ca"
  Explanation: For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal,
  and this is the only possible move. The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

 Note:
  1 <= S.length <= 20000
  S consists only of English lowercase letters.
 */

// Time O(N)
// Space O(N)
const removeDuplicates = str => {
  if (str.length === 0) return str;

  let i = 1;
  let stack = [str[0]];

  while (i < str.length) {
    if (str[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
    i++;
  }

  return stack.join('');
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time O(N)
// Space O(1)
const removeDuplicates2 = str => {
  let i = 0;

  while (i < str.length) {
    if (str[i] === str[i + 1]) {
      str = str.slice(0, i) + str.slice(i + 2);
      i = 0;
    } else {
      i++;
    }
  }
  return str;
};
