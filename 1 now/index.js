/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(nums, k, x) {
  let index = search(nums, x);
  let res = [nums[index]];

  if (index == -1) return [];

  let left = index - 1;
  let right = index + 1;

  while (k > 0 && left >= 0 && right < nums.length) {
    if (nums[index] - nums[left] <= nums[right] - nums[index]) {
      res.shift(nums[left]);
      left++;
    } else {
      res.push(nums[right]);
      right++;
    }
    k--;
  }

  while (k > 0 && left >= 0) {
    res.shift(nums[left]);
    left--;
  }

  while (k > 0 && right < nums.length) {
    res.push(nums[right]);
    right++;
  }

  function search(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;

    while (lo <= hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (nums[mid] == target) return mid;

      if (nums[mid] < target) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }

    return -1;
  }
};
