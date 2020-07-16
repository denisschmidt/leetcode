/*

Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. 

Return the maximum product you can get.

Example 1:
  Input: 2
  Output: 1
  Explanation: 2 = 1 + 1, 1 × 1 = 1.

Example 2:
  Input: 10
  Output: 36
  Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

Note: You may assume that n is not less than 2 and not larger than 58.

*/

// Time O(N)
// Space O(N)
const integerBreak = n => {
  let dp = Array(n).fill(0);

  dp[1] = 1;

  for (let num = 2; num <= n; num++) {
    let k = 0;
    let n = Math.floor(num / 2);
    let start = num - 1;
    let end = 1;
    let max = -Number.MAX_VALUE;
    while (k < n) {
      let a = Math.max(start, dp[start]);
      let b = Math.max(end, dp[end]);

      max = Math.max(max, a * b);

      start--;
      end++;
      k++;
    }

    dp[num] = max;
  }

  return dp[n];
};
