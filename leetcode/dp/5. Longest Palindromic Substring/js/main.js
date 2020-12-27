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
  let n = s.length;

  let dp = Array(n)
    .fill(null)
    .map(() => Array(n).fill(false));

  let start = 0;
  let maxLen = 1; // min palindrome equeal 1 char

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  for (let len = 1; len < n; len++) {
    for (let i = 0; i < n - len; i++) {
      let j = i + len;

      if (s[i] == s[j]) {
        dp[i][j] = j - i == 1 ? true : dp[i + 1][j - 1];
      }

      if (dp[i][j] == true && maxLen < j - i + 1) {
        start = i;
        maxLen = j - i + 1;
      }
    }
  }

  return s.substring(start, start + maxLen);
};

// Time O(N)
// Space O(1)
const longestPalindrome_II = s => {
  let n = s.length;
  let maxLen = 1;
  let startIndex = 0;

  for (let i = 0; i < n; i++) {
    let [left1, len1] = expandAroundCenter(i, i);
    let [left2, len2] = expandAroundCenter(i, i + 1);

    if (len1 > len2) {
      if (maxLen < len1) {
        maxLen = len1;
        startIndex = left1;
      }
    } else {
      if (maxLen < len2) {
        maxLen = len2;
        startIndex = left2;
      }
    }
  }

  return s.substring(startIndex, startIndex + maxLen);

  function expandAroundCenter(l, r) {
    while (l >= 0 && r < n && s[l] == s[r]) {
      l--;
      r++;
    }
    l++;
    r--;
    return [l, r - l + 1];
  }
};
