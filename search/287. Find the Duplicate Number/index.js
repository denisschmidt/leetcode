/*

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive),
prove that at least one duplicate number must exist.

Assume that there is only one duplicate number, find the duplicate one.

Example 1:

  Input: [1,3,4,2,2]
  Output: 2

Example 2:
  Input: [3,1,3,4,2]
  Output: 3
Note:

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
  let map = new Map();
  let ans = null;
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (!map.has(val)) {
      map.set(val, 1);
    } else {
      map.set(val, map.get(val) + 1);
      ans = val;
    }
  }
  return ans;
};

const res = findDuplicate([1, 3, 4, 2, 2]);
console.log('---', res);
