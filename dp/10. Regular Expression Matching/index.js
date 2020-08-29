/*

Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.

Example 1:  
  Input: s = "aa" p = "a"
  Output: false
  Explanation: "a" does not match the entire string "aa".

Example 2:
  Input: s = "aa" p = "a*"
  Output: true
  Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Example 3:
  Input: s = "ab" p = ".*"
  Output: true
  Explanation: ".*" means "zero or more (*) of any character (.)".
  
Example 4:
  Input:s = "aab" p = "c*a*b"
  Output: true
  Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".

Example 5:
  Input: s = "mississippi" p = "mis*is*p*."
  Output: false

*/

const isMatch = (s, p) => {
  if (p.length == 0) {
    return s.length == 0;
  }

  let isValid = s.length && (s[0] == p[0] || p[0] == '.');

  if (p.length >= 2 && p[1] == '*') {
    // divide by two
    return isMatch(s, p.substring(2)) || (isValid && isMatch(s.substring(1), p));
  } else {
    if (isValid) {
      return isMatch(s.substring(1), p.substring(1));
    }
    return false;
  }
};

// Time O(m * n)
// Space O(m * n)
const isMatch_II = (s, p) => {
  if (s === null || p === null) {
    return false;
  }

  const dp = Array(s.length + 1)
    .fill(null)
    .map(() => Array(p.length + 1).fill(false));

  dp[0][0] = true;

  for (let i = 1; i < dp[0].length; i++) {
    if (p[i - 1] == '*') {
      dp[0][i] = dp[0][i - 2];
    }
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (p[j - 1] === '.' || s[i - 1] === p[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        // two operations
        dp[i][j] = dp[i][j - 2];

        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      } else {
        dp[i][j] = false;
      }
    }
  }

  return dp[s.length][p.length];
};
