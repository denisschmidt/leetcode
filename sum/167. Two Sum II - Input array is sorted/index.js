/*
Given an array of integers that is already sorted in ascending order,
find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target,
where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.

Example:
  Input: numbers = [2,7,11,15], target = 9
  Output: [1,2]
  Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const len = nums.length;
  let result = [];

  for (let i = 0; i < len - 1; i++) {
    if (nums[i] + nums[i + 1] > target) break;
    if (nums[i] + nums[len - 1] < target) continue;
    if (i > 0 && nums[i] === nums[i - 1]) continue; //убираем дубли

    let high = i + 1;
    while (high < len) {
      let sum = nums[i] + nums[high];
      if (sum === target) {
        result.push(i + 1, high + 1);
        break;
      } else {
        high++;
      }
    }
  }
  return result;
};

const res = twoSum([-1, 0], -1);

console.log('---', res);
