/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 34
var searchRange = function(nums, target) {
  let index = search(0, nums.length - 1);

  if (index == -1) {
    return [-1, -1];
  }

  let lo = search(0, index);
  let hi = search(index, nums.length - 1);

  return [lo, hi];

  function search(lo, hi) {
    while (lo < hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (nums[mid] === target) {
        return mid;
      }

      if (nums[mid] > target) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
    return -1;
  }
};
