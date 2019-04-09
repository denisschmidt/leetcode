/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:
  Input: [3,0,1]
  Output: 2

Example 2:
  Input: [9,6,4,2,3,5,7,0,1]
  Output: 8

Note:

Your algorithm should run in linear runtime complexity.
Could you implement it using only constant extra space complexity?

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  const size = nums.length;
  const total = (size * (size + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += nums[i];
  }
  return total - sum;
};

const res = missingNumber([3, 0, 1]);
console.log('---', res);
