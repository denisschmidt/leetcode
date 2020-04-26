/*

Given a string S, find out the length of the longest repeating substring(s). 
Return 0 if no repeating substring exists.

Example 1:
  Input: "abcd"
  Output: 0
  Explanation: There is no repeating substring.

Example 2:
  Input: "abbaba"
  Output: 2
  Explanation: The longest repeating substrings are "ab" and "ba", each of which occurs twice.

Example 3:
  Input: "aabcaabdaab"
  Output: 3
  Explanation: The longest repeating substring is "aab", which occurs 3 times.

Example 4:
  Input: "aaaaa"
  Output: 4
  Explanation: The longest repeating substring is "aaaa", which occurs twice.
  

Note:
  The string S consists of only lowercase English letters from 'a' - 'z'.
  1 <= S.length <= 1500

*/

/*
  Алгоритм:

  Алгоритм можно разделить на две задачи:
    1) Выполнить поиск по длине подстроки в интервале от 1 до N.
    2) Проверить, есть ли дублирующаяся подстрока заданной длины L.

  Задача 1: 
    Если есть дублирующаяся подстрока длины k, это означает, что также есть дублирующаяся подстрока длины k - 1.
    Следовательно, здесь можно использовать бинарный поиск по длине строки.

  Задача 2:
    Чтобы проверить, есть ли дублирующаяся подстрока заданной длины
      1) Запишем все существующие подстроки данной длины L в Set
      2) Перемещаем скользящее окно длины L
      2) Если в сете уже существую подстрока заданной длины L значит такая подстрока уже существует
  
*/

// Binary Search
// Time O(NLogN)
// Space O(N^2)
const longestRepeatingSubstring = function(S) {
  let n = S.length;
  let lo = 1;
  let hi = n;

  // выполяняем бинарный поиск по длине строки от 1 до N
  while (lo <= hi) {
    let subLen = lo + Math.floor((hi - lo) / 2);

    if (search(subLen) != -1) {
      // если существует repeating substring длины subLen увеличиваем длину подстроки
      lo = subLen + 1;
    } else {
      // если не нашли, то уменьшаем длину подстроки
      hi = subLen - 1;
    }
  }

  return lo - 1;

  function search(len) {
    let set = new Set();

    for (let i = 0; i < n - len + 1; i++) {
      let cur = S.substring(i, i + len);

      if (set.has(cur)) {
        return i;
      }

      set.add(cur);
    }

    return -1;
  }
};

/*
  Алгоритм:

  1) Получить N суффиксов строки.  "abc" -> "abc", "bc", "c" 
  2) Отсортировать их
  3) Если существует два общих префикса, они должны быть соседями. Через цикл находим самыый длинный общий префикс.

*/

// Time O(N^2 * LogN)
// Space O(N)
const longestRepeatingSubstring_II = S => {
  let size = S.length;
  let suffix = Array(size);

  for (let i = 0; i < size; i++) {
    suffix[i] = S.substring(i);
  }

  suffix.sort();

  let max = 0;
  for (let i = 1; i < size; i++) {
    let j = 0;
    while (j < Math.min(suffix[i].length, suffix[i - 1].length)) {
      if (suffix[i][j] != suffix[i - 1][j]) {
        break;
      }
      j++;
    }

    if (max < j) {
      max = j;
    }
  }
  return max;
};

longestRepeatingSubstring_II('aabcaabdaab');

// Time O(N^2)
// Space O(N^2)
const longestRepeatingSubstring_III = S => {
  let n = S.length;
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));
  let max = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (S[i - 1] == S[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;

        if (max < dp[i][j]) {
          max = dp[i][j];
        }
      }
    }
  }

  return max;
};

// Time O(N^3)
// Space O(N^2)
const longestRepeatingSubstring_IIII = S => {
  let size = S.length;
  let map = new Map();
  let maxLen = 0;

  for (let i = size; i >= 0; i--) {
    for (let j = i; j < size; j++) {
      let current = S.substring(i, j + 1);

      if (!map.has(current)) {
        map.set(current, 1);
      } else {
        map.set(current, map.get(current) + 1);
      }

      let cnt = map.get(current);

      if (cnt > 1 && current.length > maxLen) {
        maxLen = current.length;
      }
    }
  }

  return maxLen;
};
