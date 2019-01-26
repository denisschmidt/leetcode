/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

 */

/**
 * @param {number[]} nums
 * @return
 */
const moveZeroes = function(nums) {
  let left = 0,
    index = 0;
  while (left < nums.length) {
    if (nums[left] !== 0) {
      let temp = nums[index];
      nums[index] = nums[left];
      nums[left] = temp;
      index++;
    }
    left++;
  }

  console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);
