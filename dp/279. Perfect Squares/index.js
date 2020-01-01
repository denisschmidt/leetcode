/*

Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:
  Input: n = 12
  Output: 3 
  Explanation: 12 = 4 + 4 + 4.

Example 2:
  Input: n = 13
  Output: 2
  Explanation: 13 = 4 + 9.

*/

// Time O(N * K)
// Space O(N)
const numSquares = n => {
  let square = [0];
  let maxSqureIndex = Math.sqrt(n) + 1;

  for (let i = 1; i < maxSqureIndex; i++) {
    square[i] = i ** 2;
  }

  let dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    if (square[Math.sqrt(i)] === i) {
      dp[i] = 1;
    } else {
      let min = Number.MAX_VALUE;
      for (let j = 1; j < square.length && square[j] <= i; j++) {
        min = Math.min(min, dp[square[j]] + dp[i - square[j]]);
      }

      dp[i] = min;
    }
  }

  return dp[n];
};
