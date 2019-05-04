/*
  Given an array of size n, find the majority element.
  The majority element is the element that appears more than ⌊ n/2 ⌋ times.

  You may assume that the array is non-empty and the majority element always exist in the array.

  Example 1:
    Input: [3,2,3]
    Output: 3

  Example 2:
    Input: [2,2,1,1,1,2,2]
    Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const size = nums.length;
  const majority = size / 2;
  const map = new Map();

  for (let i = 0; i < size; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }

  for (let [key, value] of map) {
    if (value > majority) {
      return key;
    }
  }
};

const res = majorityElement([2, 2, 1, 1, 1, 2, 2]);
console.log('---', res);
