/*

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

Example:
  Given array nums = [-1, 0, 1, 2, -1, -4],
  A solution set is:
  [
    [-1, 0, 1],
    [-1, -1, 2]
  ]

*/

// Time O(N^2)
// Space O(N)
const threeSum = nums => {
  let n = nums.length;
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < n - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i - 1] == nums[i]) continue;
    sumTwo(i);
  }

  return res;

  function sumTwo(i) {
    let lo = i + 1;
    let hi = n - 1;

    while (lo < hi) {
      let sum = nums[i] + nums[lo] + nums[hi];

      if (sum > 0) {
        hi--;
      } else if (sum < 0) {
        lo++;
      } else {
        res.push([nums[i], nums[lo], nums[hi]]);
        lo++;
        hi--;

        while (lo < hi && nums[lo] == nums[lo - 1]) {
          lo++;
        }
      }
    }
  }
};
