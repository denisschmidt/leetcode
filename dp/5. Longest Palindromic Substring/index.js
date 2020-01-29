/*
Given a string s, find the longest palindromic substring in s.
You may assume that the maximum length of s is 1000.

Example 1:
  Input: "babad"
  Output: "bab"

  Note: "aba" is also a valid answer.

Example 2:
  Input: "cbbd"
  Output: "bb"
 */

/*
 Рассмотрим случай "ababa".
 Если мы уже знали, что «bab» - это палиндром, то очевидно, что «ababa» должна быть палиндромом,
 поскольку две левые и правые буквы одинаковы.
 */

// Time O(N^2)
// Space O(N^2)
const longestPalindrome = s => {
  let maxLen = 0;
  let startIndex = 0;
  let dp = Array(s.length)
    .fill(null)
    .map(() => Array(s.length).fill(false));

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = j - i < 3 || dp[i + 1][j - 1];
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = Math.max(maxLen, j - i + 1);
        startIndex = i;
      }
    }
  }

  return s.substring(startIndex, startIndex + maxLen);
};

// Time O(N^2)
// Space O(N^2)
const longestPalindrome_II = s => {
  let n = s.length;
  let maxLen = 0;
  let ans = '';
  let dp = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (i === j) {
        dp[i][j] = 1;
      } else if (s[i] === s[j] && dp[i + 1][j - 1] === j - i - 1) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = 0;
      }

      if (dp[i][j] > maxLen) {
        maxLen = dp[i][j];
        ans = s.substring(i, j + 1);
      }
    }
  }

  return ans;
};
