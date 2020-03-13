/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
  Output: 4
  Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Note:
  There may be more than one LIS combination, it is only necessary for you to return the length.
  Your algorithm should run in O(n2) complexity.
  Follow up: Could you improve it to O(n log n) time complexity?

 */

// DP Solution
// Time: O(N^2)
// Space: O(N)
const lengthOfLIS = nums => {
  if (nums.length === 0) return 0;
  if (nums.length == 1) return 1;
  let dp = Array(nums.length).fill(1);
  let max = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        dp[j] = Math.max(dp[j], dp[i] + 1);
        max = Math.max(max, dp[j]);
      }
    }
  }

  return max;
};

// Input: [10,9,2,5,3,7,101,18]
//   Output: 4
//   Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

const lengthOfLIS2 = nums => {
  let ans = 0;
  let maxValue = Number.MIN_VALUE;
  let dp = [];
  dp[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    ans = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        ans = Math.max(ans, dp[j]);
      }
    }
    dp[i] = ans + 1;
    maxValue = Math.max(maxValue, dp[i]);
  }
  console.log('====', dp);
  return maxValue;
};

const res2 = lengthOfLIS2([1, 3, 6, 7, 9, 4, 10, 5, 6]);
console.log('---', res2);
