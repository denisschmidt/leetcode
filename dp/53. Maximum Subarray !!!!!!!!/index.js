/*
Given an integer array nums, find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:
  If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

 */

const maxSubArray = function(nums) {
  const s = nums.length;
  let maxValue = -Number.MAX_VALUE;

  const dp = Array(s)
    .fill(null)
    .map(() => Array(s).fill(null));

  for (let i = s - 1; i >= 0; i--) {
    for (let j = i; j < s; j++) {
      if (i === j) {
        dp[i][j] = nums[j];
      } else {
        dp[i][j] = nums[i] + nums[j] + dp[i + 1][j - 1];
        maxValue = Math.max(maxValue, dp[i][j]);
      }
    }
  }
  return maxValue;
};

const res = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log('----', res);

// =====================================================================================================================

// Solution O(N)

const maxSubArray2 = function(nums) {
  const size = nums.length;
  let maxValue = -Number.MAX_VALUE;
  const dp = [];
  dp[0] = nums[0];

  for (let i = 1; i < size; i++) {
    dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    maxValue = Math.max(maxValue, dp[i]);
  }
  return maxValue;
};

const res2 = maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log('----', res2);
