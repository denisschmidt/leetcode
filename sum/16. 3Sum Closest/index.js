/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:
  Given array nums = [-1, 2, 1, -4], and target = 1.
  The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const len = nums.length;
  let result;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 2; i++) {
    let low = i + 1;
    let high = len - 1;

    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high];
      if (result === undefined) {
        result = sum;
      }
      if (sum < target) {
        low++;
      } else if (sum > target) {
        high--;
      } else {
        do {
          low++;
        } while (nums[low] == nums[low - 1] && low < high); //скипаем low дубли
        do {
          high--;
        } while (nums[high] == nums[high + 1] && low < high); //скипаем high дубли
        result = sum;
        break;
      }
      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      }
    }
  }
  return result;
};

const res1 = threeSumClosest([1, 1, -1, -1, 3], -1);

console.log(res1);
