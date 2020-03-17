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
  
  Типичная проблема dp, есть описание в файле dpProblems.js

  Подходит под случай когда у нас есть 1 строка

  Идем от длины строки от [len = 1 до len = s.length] начинаем поиск при длине len = 1


  Рассмотрим случай "ababa".
  Если мы уже знали, что «bab» - это палиндром, то очевидно, что «ababa» должна быть палиндромом,
  Поскольку две левые и правые буквы одинаковы.

 */

// Time O(N^2)
// Space O(N^2)
const longestPalindrome = s => {
  if (s.length == 0) return '';

  let n = s.length;
  let dp = new Array(n).fill(null).map(() => Array(n).fill(false));
  let startIndex = 0;
  let maxLen = 1;

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  for (let len = 1; len < n; len++) {
    for (let i = 0; i < n - len; i++) {
      let j = len + i;

      if (s[i] == s[j]) {
        dp[i][j] = j - i == 1 ? true : dp[i + 1][j - 1];
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        startIndex = i;
      }
    }
  }

  return s.substring(startIndex, startIndex + maxLen);
};
