/*

Given a parentheses string s containing only the characters '(' and ')'. A parentheses string is balanced if:

Any left parenthesis '(' must have a corresponding two consecutive right parenthesis '))'.
Left parenthesis '(' must go before the corresponding two consecutive right parenthesis '))'.
For example, "())", "())(())))" and "(())())))" are balanced, ")()", "()))" and "(()))" are not balanced.

You can insert the characters '(' and ')' at any position of the string to balance it if needed.

Return the minimum number of insertions needed to make s balanced.

Example 1:
  Input: s = "(()))"
  Output: 1
  Explanation: The second '(' has two matching '))', but the first '(' has only ')' matching. We need to to add one more ')' at the end of the string to be "(())))" which is balanced.

Example 2:
  Input: s = "())"
  Output: 0
  Explanation: The string is already balanced.

Example 3:
  Input: s = "))())("
  Output: 3
  Explanation: Add '(' to match the first '))', Add '))' to match the last '('.

Example 4:
  Input: s = "(((((("
  Output: 12
  Explanation: Add 12 ')' to balance the string.

Example 5:
  Input: s = ")))))))"
  Output: 5
  Explanation: Add 4 '(' at the beginning of the string and one ')' at the end. The string becomes "(((())))))))".
 

Constraints:
  1 <= s.length <= 10^5
  s consists of '(' and ')' only.

*/

// Time O(N)
// Space O(1)
const minInsertions = s => {
  let open = 0;
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      open++;
    } else {
      if (open > 0) {
        if (s[i] == ')' && s[i + 1] == ')') {
          open--;
          i++;
        } else {
          res++;
          open--;
        }
      } else {
        if (s[i] == ')' && s[i + 1] == ')') {
          res++;
          i++;
        } else {
          res += 2;
        }
      }
    }
  }
  return res + open * 2;
};
