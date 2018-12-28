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
// ===========================================================================================================
/**
 *
 * SOLUTION DP
 *
 * FIND LONGEST COMMON SUBSEQUENCE (LCS)
 *
 * Complexity Analysis
 *  Time complexity : O(m*n).
 *  We need to fill in the dpdp array of size mmxnn.
 *  Here, mm and nn refer to the lengths of s1s1 and s2s2.
 *
 * Space complexity : O(m*n). dpdp array of size mmxnn is used.
 *
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

const minDistance2 = function(s1, s2) {
  const matrix = [[]];

  for (let i = 0; i <= s1.length; i++) {
    if (!matrix[i]) {
      matrix[i] = [];
    }
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 || j === 0 ) {
        matrix[i][j] = 0;
      } else if (s1[i - 1] === s2[j - 1]) { // Добавляем единицу к длине LCS
        matrix[i][j] = 1 + matrix[i - 1][j - 1];
      } else {
        /*
        s1[i - 1] === s2[j - 1] не совпадают друг с другом.
        В этом случае мы не можем увеличить текущую запись по сравнению с записями,
        соответствующими предыдущим индексам,
        нам нужно повторить предыдущую запись,
        чтобы указать, что длина LCS для текущих индексов остается неизменной
         */
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1])
      }
    }
  }
  // определили наибольшую LCS и рассчитываем кол0во удалений
  return s1.length + s2.length - 2 * matrix[s1.length][s2.length];
};

const res2 = minDistance2('sea', 'ate');

console.log('---', res2);


// ==========================================================================================

/**
 *
 * SOLUTION DP
 *
 * FIND LONGEST COMMON SUBSEQUENCE
 *
 * Complexity Analysis
 *  Time complexity : O(m*n).
 *  We need to fill in the dpdp array of size mmxnn.
 *  Here, mm and nn refer to the lengths of s1s1 and s2s2.
 *
 * Space complexity : O(m*n). dpdp array of size mmxnn is used.
 *
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

/*

Вместо того, чтобы находить длину LCS и затем определять требуемое количество удалений,
мы можем напрямую определять количество требуемых удалений для текущих индексов.

 */

const minDistance = function(s1, s2) {
  const matrix = [[]];

  for (let i = 0; i <= s1.length; i++) {
    if (!matrix[i]) {
      matrix[i] = [];
    }
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 || j === 0 ) {
        matrix[i][j] = i + j;
      } else if (s1[i - 1] === s2[j - 1]) { // повторяем символ
        matrix[i][j] = matrix[i - 1][j - 1];
      } else { // Минимальное кол-во удалений + 1
        matrix[i][j] = 1 + Math.min(matrix[i - 1][j], matrix[i][j - 1])
      }
    }
  }
  // дает требуемое минимальное количество удалений.
  return matrix[s1.length][s2.length];
};

const res = minDistance('sea', 'ate');

console.log('---', res);
