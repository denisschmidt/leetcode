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
  let maxPalidromeLen = lps(s);

  // Если разница между длиной входной строки и максимальной длиной палидрома больше k
  // Следовательно, чтобы получить макс палидром нужно сделать большее кол-во удалений из входной строки
  return s.length - maxPalidromeLen > k ? false : true;
};

function lps(s) {
  let n = s.length;
  let dp = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  for (let len = 1; len < n; len++) {
    for (let i = 0; i < n - len; i++) {
      let j = len + i;

      if (s[i] == s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][n - 1];
}
