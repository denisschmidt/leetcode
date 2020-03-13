/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let dp = Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        dp[j] = Math.max(dp[j], dp[i] + 1);
      }
    }
  }

  return dp[nums.length - 1];
};

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);

// 854. K-Similar Strings
