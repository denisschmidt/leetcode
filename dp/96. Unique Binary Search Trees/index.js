/*
Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

 Video solution => https://www.youtube.com/watch?v=GgP75HAvrlY

 */

// DP SOLUTION EASY TO UNDERSTAND
/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;

  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      //  All possible unique left BST's count is G[j - 1] if we plant at i.
      //  All possible unique right BST's count is G[i - j] if we plant at i.
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  console.log('---', dp);
  return dp[n];
};

const res = numTrees(3);
console.log('---', res);
