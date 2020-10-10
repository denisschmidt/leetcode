/*
  Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

  Note: The algorithm should run in linear time and in O(1) space.

  Example 1:
    Input: [3,2,3]
    Output: [3]

  Example 2:
    Input: [1,1,1,3,3,2,2,2]
    Output: [1,2]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function (nums) {
  const size = nums.length;
  const majority = size / 3;
  const map = new Map();
  let ans = [];

  for (let i = 0; i < size; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }

  for (let [key, value] of map) {
    if (value > majority) {
      ans.push(key);
    }
  }
  return ans;
};

const res = majorityElement([1, 1, 1, 3, 3, 2, 2, 2]);
console.log('---', res);
