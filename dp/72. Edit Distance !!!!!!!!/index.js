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

For the base case, that is, to convert a string to an empty string, the mininum number of operations (deletions) is just the length of the string.
So we have dp[i][0] = i and dp[0][j] = j.

For the general case to convert word1[0..i) to word2[0..j), we break this problem down into sub-problems.
Suppose we have already known how to convert word1[0..i - 1) to word2[0..j - 1) (dp[i - 1][j - 1]), if word1[i - 1] == word2[j - 1],
then no more operation is needed and dp[i][j] = dp[i - 1][j - 1].


If word1[i - 1] != word2[j - 1], we need to consider three cases.

  1) Replace word1[i - 1] by word2[j - 1] (dp[i][j] = dp[i - 1][j - 1] + 1);
  2) If word1[0..i - 1) = word2[0..j) then delete word1[i - 1] (dp[i][j] = dp[i - 1][j] + 1);
  3) If word1[0..i) + word2[j - 1] = word2[0..j) then insert word2[j - 1] to word1[0..i) (dp[i][j] = dp[i][j - 1] + 1).


So when word1[i - 1] != word2[j - 1], dp[i][j] will just be the minimum of the above three cases.

Dynamic Programming:
  The edit distance algorithm is very popular among the data scientists.
  It's one of the basic algorithms used for evaluation of machine translation and speech recognition.

Complexity Analysis
  Time complexity : O(mn) as it follows quite straightforward for the inserted loops.
  Space complexity : O(mn) since at each step we keep the results of all previous computations.

 */

// Time O(s1*s2)
// Space O(s1*s2)
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
        // If word1[i - 1] != word2[j - 1], we need to consider three cases.
        matrix[i][j] = 1 + Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);
      }
    }
  }
  return matrix[s1][s2];
};

const res = minDistance('dinitrophenylhydrazine', 'dimethylhydrazine');
console.log('---', res);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// O(n) space
const minDistance2 = function(word1, word2) {
  const s1 = word1.length;
  const s2 = word2.length;

  let cur = [];
  let pre = '';
  cur[s2 + 1] = 0;

  for (let i = 0; i <= s2; i++) {
    cur[i] = i;
  }

  for (let i = 1; i <= s1; i++) {
    pre = cur[0];
    cur[0] = i;
    for (let j = 1; j <= s2; j++) {
      let temp = cur[j];
      if (word1[i - 1] === word2[j - 1]) {
        cur[j] = pre;
      } else {
        cur[j] = Math.min(pre, Math.min(cur[j - 1], cur[j])) + 1;
      }
      pre = temp;
    }
  }

  return cur[s2];
};
