/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let max = 0;
  let start = nums.length;
  let end = -Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (nums[i] > nums[j]) {
        start = Math.min(start, i);
        end = Math.max(end, j);
      }
    }
  }

  return max;
};
