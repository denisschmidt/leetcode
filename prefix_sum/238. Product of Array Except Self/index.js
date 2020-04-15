/*

Given an array nums of n integers where n > 1
Return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
  Input:  [1,2,3,4]
  Output: [24,12,8,6]

Example:
  Input: [3, 2, 1]
  Output: [2, 3, 6]

Note: Please solve it without division and in O(n).


Follow up:
  Could you solve it with constant space complexity? 
  (The output array does not count as extra space for the purpose of space complexity analysis.)

 */

/*

  Алгоритм работы: 
  Суть решения проста, чтобы получить произведение в какой-либо точке 
  Необходимо знать префикс суммы левой половины от этого числа и в правой половины от этого числа
       
       nums           left             right 
  [1, 2, 3, 4]    [1, 1, 2, 6]    [24, 12, 4, 1]

                        [24, 12, 8, 6]

*/

// Time O(N)
// Space O(1) - Выходной массив не считается дополнительным пространством для целей анализа сложности пространства
var productExceptSelf = function(nums) {
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

// Time O(N)
// Space O(1)
const productExceptSelf_II = nums => {
  let n = nums.length;
  let left = [];

  left[0] = nums[0];

  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i];
  }

  let right = [];
  right[n - 1] = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i];
  }

  nums[0] = right[1];
  nums[n - 1] = left[n - 2];

  for (let i = 0; i < n; i++) {
    nums[i] = left[i - 1] * right[i + 1];
  }

  return nums;
};
