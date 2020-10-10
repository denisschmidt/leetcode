/*

Given three integers n, m and k. 

Consider the following algorithm to find the maximum element of an array of positive integers:

You should build the array arr which has the following properties:

arr has exactly n integers.
1 <= arr[i] <= m where (0 <= i < n).
After applying the mentioned algorithm to arr, the value search_cost is equal to k.
Return the number of ways to build the array arr under the mentioned conditions. 

As the answer may grow large, the answer must be computed modulo 10^9 + 7.

Example 1:
  Input: n = 2, m = 3, k = 1
  Output: 6
  Explanation: The possible arrays are [1, 1], [2, 1], [2, 2], [3, 1], [3, 2] [3, 3]

Example 2:
  Input: n = 5, m = 2, k = 3
  Output: 0
  Explanation: There are no possible arrays that satisify the mentioned conditions.

Example 3:
  Input: n = 9, m = 1, k = 1
  Output: 1
  Explanation: The only possible array is [1, 1, 1, 1, 1, 1, 1, 1, 1]

Example 4:
  Input: n = 50, m = 100, k = 25
  Output: 34549172
  Explanation: Don't forget to compute the answer modulo 1000000007

Example 5:
  Input: n = 37, m = 17, k = 7
  Output: 418930126
  

Constraints:
  1 <= n <= 50
  1 <= m <= 100
  0 <= k <= n

*/

// Time O(n * m * k * m)
// Space O(n * m * k)
const numOfArrays = (n, m, k) => {
  // k - индекс макс эл-та
  // [1,1,1,2,2] max - 2, max - 3, cost - 2
  let dp = Array(n + 1)
    .fill(0)
    .map(() =>
      Array(m + 1)
        .fill(0)
        .map(() => Array(k + 1).fill(null)),
    );
  let mod = 1e9 + 7;

  return helper(0, 0, 0);

  function helper(len, currSum, currCost) {
    if (len == n) {
      if (k == currCost) return 1;
      return 0;
    }

    if (dp[len][currSum][currCost] != null) {
      return dp[len][currSum][currCost];
    }

    let ans = 0;
    for (let num = 1; num <= m; num++) {
      let newCost = currCost;
      let newSum = currSum;

      if (num > newSum) {
        newCost++;
        newSum = num;
      }

      if (newCost > k) break;

      ans += helper(len + 1, newSum, newCost);
      ans = ans % mod;
    }

    dp[len][currSum][currCost] = ans;

    return dp[len][currSum][currCost];
  }
};
