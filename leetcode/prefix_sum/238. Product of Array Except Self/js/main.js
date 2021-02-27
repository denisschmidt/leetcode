/*

  Алгоритм работы: 
  Суть решения проста, чтобы получить произведение в какой-либо точке 
  Необходимо знать префикс суммы левой половины от этого числа и в правой половины от этого числа
       
       nums           left             right 
  [1, 2, 3, 4]    [1, 1, 2, 6]    [24, 12, 4, 1]

                        [24, 12, 8, 6]

*/

// Time O(N)
// Space O(N)
const productExceptSelf = nums => {
  let n = nums.length;
  let dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    dp[i] = dp[i - 1] * nums[i - 1];
  }

  let right = 1;

  for (let i = n - 1; i >= 0; i--) {
    dp[i] = dp[i] * right;
    right = nums[i] * right;
  }

  return dp;
};
