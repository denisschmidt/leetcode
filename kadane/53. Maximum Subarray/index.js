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

Каждый раз, когда мы получаем положительную сумму, сравниваем ее с max_so_far и обновляем max_so_far, если она больше, чем max_so_far

 */

// Greedy

// Обновляем локальную максимальную сумму на каждом шаге, это приведет к глобальной максимальной сумме

// Time O(n)
// Space O(1)
const maxSubArray = nums => {
  let currSum = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i] + currSum, nums[i]);

    if (currSum > max) {
      max = currSum;
    }
  }

  return max;
};

// Dynamic Programming (Kadane's algorithm)
const maxSubArray_II = nums => {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];
    }
    max = Math.max(max, nums[i]);
  }
  return max;
};
