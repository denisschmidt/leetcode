/*
Given two words word1 and word2, find the minimum number of steps required to make word1 and word2 the same,
where in each step you can delete one character in either string.

Example 1:
  Input: "sea", "eat"
  Output: 2

Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
  Note:

  The length of given words won't exceed 500.
  Characters in given words can only be lower-case letters.

 */

// Time O(N^2)
// Space O(N^2)
const minDistance = function(word1, word2) {
  let n = word1.length;
  let m = word2.length;

  // Содержит состояние требуемых удалений для текущих индексов.
  let dp = Array(n + 1)
    .fill(null)
    .map(() => Array(m + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (i === 0) {
        dp[0][j] = j;
      } else if (j === 0) {
        dp[i][0] = i;
      } else if (word1[i - 1] === word2[j - 1]) {
        // повторяем символ
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Минимальное кол-во удалений + 1
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[n][m];
};

// SOLUTION DP
// FIND LONGEST COMMON SUBSEQUENCE (LCS)

// Time O(N^2)
// Space O(N^2)
const minDistance_II = function(s1, s2) {
  const matrix = [[]];

  for (let i = 0; i <= s1.length; i++) {
    if (!matrix[i]) {
      matrix[i] = [];
    }
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 || j === 0) {
        matrix[i][j] = 0;
      } else if (s1[i - 1] === s2[j - 1]) {
        // Добавляем единицу к длине LCS
        matrix[i][j] = 1 + matrix[i - 1][j - 1];
      } else {
        /*
        s1[i - 1] === s2[j - 1] не совпадают друг с другом.
        В этом случае мы не можем увеличить текущую запись по сравнению с записями,
        соответствующими предыдущим индексам,
        нам нужно повторить предыдущую запись,
        чтобы указать, что длина LCS для текущих индексов остается неизменной
         */
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }
  // определили наибольшую LCS и рассчитываем кол0во удалений
  return s1.length + s2.length - 2 * matrix[s1.length][s2.length];
};
