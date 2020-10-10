/*

Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:
  The solution set must not contain duplicate quadruplets.

Example:
  Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
  A solution set is:
  [
    [-1,  0, 0, 1],
    [-2, -1, 1, 2],
    [-2,  0, 0, 2]
  ]

*/

// Time O(N^3)
// Space O(N)
const fourSum = (nums, target) => {
  let n = nums.length;
  let res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0 && nums[i] > target) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] > 0 && nums[i] + nums[j] > target) break;
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;

      twoSum(i, j, nums);
    }
  }

  return res;

  function twoSum(i, j, nums) {
    let lo = j + 1;
    let hi = nums.length - 1;

    while (lo < hi) {
      let sum = nums[i] + nums[j] + nums[lo] + nums[hi];

      if (sum > target) {
        hi--;
      } else if (sum < target) {
        lo++;
      } else {
        res.push([nums[i], nums[j], nums[lo], nums[hi]]);

        lo++;
        hi--;

        while (lo < hi && nums[lo - 1] == nums[lo]) {
          lo++;
        }
      }
    }
  }
};
