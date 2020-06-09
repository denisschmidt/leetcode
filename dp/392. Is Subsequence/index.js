/*

Given a string s and a string t, check if s is subsequence of t.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Follow up:
  If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. 
  In this scenario, how would you change your code?

Credits: Special thanks to @pbrother for adding this problem and creating all test cases.

Example 1:
  Input: s = "abc", t = "ahbgdc"
  Output: true

Example 2:
  Input: s = "axc", t = "ahbgdc"
  Output: false
  

Constraints:
  0 <= s.length <= 100
  0 <= t.length <= 10^4
  Both strings consists only of lowercase characters.

*/

// Two pointers
// Time O(N)
// Space O(1)
const isSubsequence = (s, t) => {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] == t[j]) i++;
    j++;
  }

  return i == s.length;
};

// DP longest Common Subsequence
// Time O(N*M)
// Space O(N*M)
const isSubsequence_II = function(s, t) {
  if (s.length == 0) return true;
  let dp = Array(t.length + 1)
    .fill(0)
    .map(() => Array(s.length + 1).fill(0));

  for (let i = 1; i <= t.length; i++) {
    for (let j = 1; j <= s.length; j++) {
      if (t[i - 1] == s[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }

      if (dp[i][s.length] == s.length) return true;
    }
  }

  return false;
};
