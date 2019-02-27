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
const firstMissingPositive = function(arr) {
  let ans = Number.MAX_VALUE;
  const nums = arr.sort((a, b) => a - b).filter(val => val > 0);
  if (!nums.includes(0)) nums.unshift(0);
  for (let i = 0; i < nums.length - 1; i++) {
    let diff = nums[i + 1] - nums[i];
    if (diff > 1) {
      ans = Math.min(ans, nums[i] + 1);
    }
  }
  return ans !== Number.MAX_VALUE ? ans : nums[nums.length - 1] + 1;
};

const res = firstMissingPositive([1, 2, 0]);
console.log('===', res);
