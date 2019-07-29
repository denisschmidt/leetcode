/*
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:
  Input: [1, 2, 0]
  Output: 3

Example 2:
  Input: [3, 4, -1, 1]
  Output: 2

Example 3:
  Input: [7,8,9,11,12]
  Output: 1

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    while (i + 1 !== nums[i] && nums[i] > 0 && nums[i] <= nums.length) {
      let swap = nums[i];
      nums[i] = nums[swap - 1];
      nums[swap - 1] = swap;

      if (nums[i] === nums[swap - 1]) break;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return nums.length + 1;
};

firstMissingPositive([2, 23, 20, 1]);
