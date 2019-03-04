/*

Given a string s, find the longest palindromic subsequence's length in s.
You may assume that the maximum length of s is 1000.

Example 1:
  Input: "bbbab"
  Output: 4

One possible longest palindromic subsequence is "bbbb".

Example 2:
  Input: "cbbd"
  Output: 2

One possible longest palindromic subsequence is "bb".
 */

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = s => {
  const size = s.length;
  const dp = Array(s.length)
    .fill(null)
    .map(() => Array(s.length).fill(0));

  for (let i = size - 1; i >= 0; i--) {
    for (let j = i; j < size; j++) {
      if (i === j) {
        dp[i][j] = 1;
      } else if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  console.log('---', dp);
  return dp[0][size - 1];
};

const res = longestPalindromeSubseq('cbbd');
console.log('---', res);
