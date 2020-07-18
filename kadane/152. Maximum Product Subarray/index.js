/*

Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:
  Input: [2,3,-2,4]
  Output: 6
  Explanation: [2,3] has the largest product 6.

Example 2:
  Input: [-2,0,-1]
  Output: 0
  Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

*/

// Time O(N)
// Space O(1)
const maxProduct = nums => {
  let n = nums.length;

  let max = nums[0];
  let bestMin = max;
  let bestMax = max;

  for (let i = 1; i < n; i++) {
    if (nums[i] < 0) {
      let t = bestMin;
      bestMin = bestMax;
      bestMax = t;
    }

    bestMin = Math.min(nums[i], nums[i] * bestMin);
    bestMax = Math.max(nums[i], nums[i] * bestMax);

    max = Math.max(max, bestMax);
  }

  return max;
};

/* 
  Алгоритм:  
    Все дело в том, какое кол-во четных или нечетных числе у нас есть.
    Если кол-во отрицательных чисел четное, то первый проход даст решение.
    Если кол-во отрицательных чисел нечетные, второй проход даст решение.
*/

// Time O(N)
// Space O(1)
const maxProduct_II = nums => {
  let sum = 1;
  let ans = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum *= nums[i];
    ans = Math.max(sum, ans);

    if (sum === 0) {
      sum = 1;
    }
  }

  sum = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    sum *= nums[i];
    ans = Math.max(sum, ans);

    if (sum === 0) {
      sum = 1;
    }
  }

  return ans;
};
