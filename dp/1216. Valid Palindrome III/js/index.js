/*
Given a string s and an integer k, find out if the given string is a K-Palindrome or not.

A string is K-Palindrome if it can be transformed into a palindrome by removing at most k characters from it.

Example 1:
  Input: s = "abcdeca", k = 2
  Output: true
  Explanation: Remove 'b' and 'e' characters.
 

Constraints:
  1 <= s.length <= 1000
  s has only lowercase English letters.
  1 <= k <= s.length
*/

// Time O(N^2)
// Space O(N^2)
const isValidPalindrome = (s, k) => {
  let n = s.length;

  // find longest palindromic subsequence - 516 problem
  let long = longestSubSeq(s);

  // if longest subsequence >= n - k
  return long >= n - k;

  function longestSubSeq(s) {
    let dp = Array(n)
      .fill(null)
      .map(() => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
      dp[i][i] = 1;
    }

    for (let len = 1; len < n; len++) {
      for (let i = 0; i < n - len; i++) {
        let j = i + len;

        if (s[i] == s[j]) {
          if (j - i == 1) {
            dp[i][j] = 2;
          } else {
            dp[i][j] = dp[i + 1][j - 1] + 2;
          }
        } else {
          dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
        }
      }
    }
    return dp[0][n - 1];
  }
};
