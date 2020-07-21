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

/*

  https://www.youtube.com/watch?v=_nCsPn7_OgI&t=57s

  https://leetcode.com/problems/longest-palindromic-subsequence/discuss/99101/Straight-forward-Java-DP-solution
    
  Типичная проблема dp, есть описание в файле dpProblems.js

  Подходит под случай когда у нас есть 1 строка

  Идем от длины строки от [len = 1 до len = s.length] начинаем поиск при длине len = 1


  Пример: "axbdba"

  1) Заполним таблицу начальным значение dp[i, i] == 1, потому что все одиночные символы в строке - это палиндром
  
  2) Если у нас s[i] == s[j] допустим i = 2 и j = 4, тогда длина в этой точке будет равна 2 + dp[i + 1][j - 1] = 3

  3) Заполняем так всю таблицу тогда dp[0][s.len - 1] это и будем максимальное значение для строки от 0 до s.length

*/

// Time O(N^2)
// Space O(N^2)
const longestPalindromeSubseq = s => {
  let n = s.length;

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
};
