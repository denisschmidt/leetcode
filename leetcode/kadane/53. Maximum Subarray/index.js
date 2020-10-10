/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, 
try coding another solution using the divide and conquer approach, which is more subtle.


Kadane’s Algo with O(n) linear complexity

Простая идея алгоритма Кадане состоит в том, чтобы искать все положительные непрерывные сегменты массива.

И отслеживать максимальную сумму непрерывного сегмента среди всех положительных сегментов

*/

// Greedy
// Обновляем локальную максимальную сумму на каждом шаге, это приведет к глобальной максимальной сумме
// Time O(n)
// Space O(1)
const maxSubArray = nums => {
  let sum = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // local max
    sum = Math.max(nums[i], sum + nums[i]);

    // global max
    max = Math.max(max, sum);
  }

  return max;
};

// DP
// Time O(N)
// Space O(1)
const maxSubArray_II = nums => {
  let max = nums[0];
  let n = nums.length;

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];
    }
    max = Math.max(max, nums[i]);
  }
  return max;
};
