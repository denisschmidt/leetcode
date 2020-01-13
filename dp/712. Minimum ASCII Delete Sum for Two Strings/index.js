/*
Given two strings s1, s2, find the lowest ASCII sum of deleted characters to make two strings equal.

Example 1:
  Input: s1 = "sea", s2 = "eat"
  Output: 231
  Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
    Deleting "t" from "eat" adds 116 to the sum.
    At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

Example 2:
  Input: s1 = "delete", s2 = "leet"
  Output: 403
  Explanation: Deleting "dee" from "delete" to turn the string into "let",
    adds 100[d]+101[e]+101[e] to the sum.  Deleting "e" from "leet" adds 101[e] to the sum.
    At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
    If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.

Note:
  0 < s1.length, s2.length <= 1000.
  All elements of each string will have an ASCII value in [97, 122].
*/

const minimumDeleteSum = (s1, s2) => {
  let n = s1.length;
  let m = s2.length;

  let dp = Array(n + 1)
    .fill(null)
    .map(() => Array(m + 1).fill(0));

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < m + 1; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 0;
      } else if (i === 0) {
        dp[i][j] = dp[0][j - 1] + s2[j - 1].charCodeAt(0);
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][0] + s1[i - 1].charCodeAt(0);
      } else if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(s1[i - 1].charCodeAt(0) + dp[i - 1][j], s2[j - 1].charCodeAt(0) + dp[i][j - 1]);
      }
    }
  }

  return dp[n][m];
};
