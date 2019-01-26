/*
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
  Input: [1,1,0,1,1,1]
  Output: 3
  Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.

Note:
  The input array will only contain 0 and 1.
  The length of input array is a positive integer and will not exceed 10,000

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function(nums) {
  let dp = [],
    maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 0;
    for (let j = 0; j <= i; j++) {
      if (nums[j] === 1) {
        dp[i] = dp[i] + 1;
      } else {
        dp[i] = 0;
      }
    }
    if (maxLen < dp[i]) {
      maxLen = dp[i];
    }
  }
  console.log('---', dp);
  return maxLen;
};

const res = findMaxConsecutiveOnes([1, 1, 1, 1, 1, 0, 0, 1, 1]);
console.log('---', res);
