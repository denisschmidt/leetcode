/*

We partition a row of numbers A into at most K adjacent (non-empty) groups, then our score is the sum of the average of each group. 

What is the largest score we can achieve?

Note that our partition must use every number in A, and that scores are not necessarily integers.

Example:
  Input: A = [9,1,2,3,9] K = 3
  Output: 20

Explanation: 
  The best choice is to partition A into [9], [1, 2, 3], [9]. The answer is 9 + (1 + 2 + 3) / 3 + 9 = 20.
  We could have also partitioned A into [9, 1], [2], [3, 9], for example.
  That partition would lead to a score of 5 + 2 + 6 = 13, which is worse.
 

Note:
  1 <= A.length <= 100.
  1 <= A[i] <= 10000.
  1 <= K <= A.length.
  Answers within 10^-6 of the correct answer will be accepted as correct.

*/

// DFS + MEMO
// Time O(K * N^2)
// Space O(K * K)
const largestSumOfAverages = function (nums, K) {
  let n = nums.length;
  let dp = Array(101)
    .fill(0)
    .map(() => Array(101).fill(0));

  return helper(0, K);

  function helper(start, cntSubarrays) {
    if (start >= n || dp[cntSubarrays][start] > 0) {
      return dp[cntSubarrays][start];
    }

    let sum = 0;

    for (let i = start; i <= n - cntSubarrays; i++) {
      sum += nums[i];

      if (i < n - 1 && cntSubarrays == 1) continue;

      dp[cntSubarrays][start] = Math.max(dp[cntSubarrays][start], sum / (i - start + 1) + helper(i + 1, cntSubarrays - 1));
    }

    return dp[cntSubarrays][start];
  }
};
