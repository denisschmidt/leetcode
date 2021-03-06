/*

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

*/

// Time O(N^2)
// Space O(N^2)
const minDistance = (word1, word2) => {
  let n = word1.length;
  let m = word2.length;
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }

  for (let i = 1; i <= m; i++) {
    dp[0][i] = dp[0][i - 1] + 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[n][m];
};
