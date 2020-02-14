/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        for (let k = j; k < nums.length; k++) {
          if (nums[k] > nums[j]) {
            return true;
          }
        }
      }
    }
  }

  return false;
};
