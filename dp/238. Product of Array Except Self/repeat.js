const productExceptSelf = function(nums) {
  let dp = [];
  const size = nums.length;
  let left = 1;

  for (let i = 0; i < size; i++) {
    if (i > 0) {
      left = nums[i - 1] * left;
    }
    dp[i] = left;
  }

  let right = 1;
  for (let i = size - 1; i >= 0; i--) {
    if (i < size - 1) {
      right = nums[i + 1] * right;
    }
    dp[i] = right * dp[i];
  }

  return dp;
};

/*
  [1, 2, 3, 4]

  [24, 12,  4, 1] - right

  [1,  1,  2,  6] - left

  [24, 12 ,8, 6]
 */

const res = productExceptSelf([1, 2, 3, 4]);

console.log('====', res);
