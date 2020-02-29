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

*/

// Time O(LogN)
// Space O(1)
const searchRange = (nums, target) => {
  let first = search(nums, target);

  if (first == -1) {
    return [-1, -1];
  }

  let last = search(nums, target + 1) - 1;

  if (first <= last) {
    return [first, last];
  }

  return [-1, -1];
};

function search(nums, target) {
  let lo = 0;
  let hi = nums.length;
  let firstPos = nums.length;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] >= target) {
      firstPos = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return firstPos;
}
