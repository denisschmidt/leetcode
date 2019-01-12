/*

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

O(log n)

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0,
    right = nums.length - 1,
    indexArr = [];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  if (nums[right] !== target) {
    return [-1, -1];
  }

  if (nums[right + 1] === target) {
    indexArr.push(right, right + 1);
    let i = right + 2;
    while (i < nums.length && nums[i] === target) {
      indexArr.push(i);
      i++;
    }
  }

  if (indexArr.length > 1) {
    return [indexArr[0], indexArr[indexArr.length - 1]];
  }

  return [right, right];
};

let nums = [3, 3, 3],
  target = 3;

console.log(searchRange(nums, target));
