/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

You are given a target value to search. If found in the array return true, otherwise return false.

Example 1:
  Input: nums = [2,5,6,0,0,1,2], target = 0
  Output: true

Example 2:
  Input: nums = [2,5,6,0,0,1,2], target = 3
  Output: false

Follow up:
  This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
  Would this affect the run-time complexity? How and why?

*/

// Time O(LogN)
// Space O(1)
const search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) {
      return true;
    }

    if (nums[l] < nums[mid]) {
      if (nums[l] <= target && nums[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else if (nums[mid] < nums[r]) {
      if (nums[mid] < target && nums[r] >= target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      if (nums[mid] === nums[l]) l++;
      if (nums[mid] === nums[r]) r--;
    }
  }

  return nums[l] === target;
};
