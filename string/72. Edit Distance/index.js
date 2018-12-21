/*
Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character

Example 1:

  Input: word1 = "horse", word2 = "ros"
  Output: 3
  Explanation:
    horse -> rorse (replace 'h' with 'r')
    rorse -> rose (remove 'r')
    rose -> ros (remove 'e')

Example 2:

  Input: word1 = "intention", word2 = "execution"
  Output: 5
  Explanation:
    intention -> inention (remove 't')
    inention -> enention (replace 'i' with 'e')
    enention -> exention (replace 'n' with 'x')
    exention -> exection (replace 'n' with 'c')
    exection -> execution (insert 'u')
=======================================================================================================

Solution:

Dynamic Programming:
  The edit distance algorithm is very popular among the data scientists.
  It's one of the basic algorithms used for evaluation of machine translation and speech recognition.

Complexity Analysis
  Time complexity : O(mn) as it follows quite straightforward for the inserted loops.
  Space complexity : O(mn) since at each step we keep the results of all previous computations.

 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function(word1, word2) {
  const matrix = [[]];
  const s1 = word1.length;
  const s2 = word2.length;

  for (let i = 0; i <= s1; i++) {
    if (!matrix[i]) {
      matrix[i] = [];
    }
    for (let j = 0; j <= s2; j++) {
      if (i === 0) {
        matrix[i][j] = j;
      } else if (j === 0) {
        matrix[i][j] = i;
      } else if (word1[i - 1] === word2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = 1 + Math.min(
          matrix[i - 1][j],
          matrix[i][j - 1],
          matrix[i - 1][j - 1]
        );
      }
    }
  }
  return matrix[s1][s2];
};

const res = minDistance('dinitrophenylhydrazine', 'dimethylhydrazine');
console.log('---', res);
