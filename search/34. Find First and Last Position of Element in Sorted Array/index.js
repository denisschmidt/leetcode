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

// Binary Search Recursion
// Time O(LogN)
// Space O(1)
// Вся работа выполняется на месте, поэтому общее использование памяти постоянно.
const searchRange2 = function(nums, target) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;

  const first = bs(nums, left, right, false);
  const second = bs(nums, left, right, true);

  return [first, second];

  function bs(nums, l, r, hasStartIndex) {
    if (l <= r) {
      let mid = l + Math.floor((r - l) / 2);

      if (nums[mid] === target) {
        if (nums[mid - 1] !== target && !hasStartIndex) return mid;
        else if (nums[mid + 1] !== target && hasStartIndex) return mid;
        else if (nums[mid - 1] === target && !hasStartIndex) {
          r = mid - 1;
          return bs(nums, l, r, hasStartIndex);
        } else if (nums[mid + 1] === target && hasStartIndex) {
          l = mid + 1;
          return bs(nums, l, r, hasStartIndex);
        }
      }

      if (nums[mid] >= target) {
        r = mid - 1;
        return bs(nums, l, r, hasStartIndex);
      } else {
        l = mid + 1;
        return bs(nums, l, r, hasStartIndex);
      }
    }
    return -1;
  }
};
