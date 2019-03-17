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

/**
 * @param {string} s
 * @return {string}
 */

// Complexity Analysis
// Time complexity : O(n^2) This gives us a runtime complexity of O(n^2)
// Space complexity : O(n^2) It uses O(n^2)

/*
 Рассмотрим случай "ababa".
 Если мы уже знали, что «bab» - это палиндром, то очевидно, что «ababa» должна быть палиндромом,
 поскольку две левые и правые буквы одинаковы.
 */

const longestPalindrome = s => {
  let res = '';
  const size = s.length;
  const dp = Array(s.length)
    .fill(null)
    .map(() => Array(s.length).fill(null));

  for (let i = size - 1; i >= 0; i--) {
    for (let j = i; j < size; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1]);

      if (dp[i][j] && (res === null || j - i + 1 > res.length)) {
        res = s.substring(i, j + 1);
      }
    }
  }
  return res;
};

const res = longestPalindrome('baab');
console.log('---', res);
