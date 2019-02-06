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

// **Complexity Analysis**
// Time complexity : O(n^2) two loops of n are there.

// Space complexity : O(n). dp array of size nn is used.

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
  if (!nums.length) {
    return 0;
  }
  let dp = [],
    maxAns = 1,
    ans;
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    ans = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        ans = Math.max(ans, dp[j]);
      }
    }
    dp[i] = ans + 1;
    maxAns = Math.max(maxAns, dp[i]);
  }
  return maxAns;
};

const res = lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]);
console.log('---', res);

// Input: [10,9,2,5,3,7,101,18]
//   Output: 4
//   Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

const lengthOfLIS = function(nums) {};
