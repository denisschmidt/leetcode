/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
 */

// Time O(N)
// Space O(N)
const twoSum = (nums, target) => {
  let map = new Map();
  const size = nums.length;
  const ans = [];

  for (let i = 0; i < size; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < size; i++) {
    let prev = target - nums[i];
    if (map.has(prev) && map.get(prev) !== i) {
      ans.push(i, map.get(prev));
      break;
    }
  }
  return ans;
};
