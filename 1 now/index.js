/*

  [2, 6, 4, 8, 10, 9, 15]

  [6, 4, 8, 10, 9]


  [1, 3, 2, 2, 2]
 [1,3,2,2,2]

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let start = Number.MAX_VALUE;
  let end = -Number.MAX_VALUE;

  if (isValid(nums)) return 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      start = Math.min(start, i - 1);
      end = Math.max(end, i);

      swap(nums, i - 1, i);

      if (isValid(nums)) {
        return end - start + 1;
      }
    }
  }

  return end - start + 1;
};

function swap(nums, i, j) {
  return ([nums[i], nums[j]] = [nums[j], nums[i]]);
}

function isValid(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) return false;
  }
  return true;
}

let a = findUnsortedSubarray([1, 2, 3, 3, 3]);
console.log(a);
