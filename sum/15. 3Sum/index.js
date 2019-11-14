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
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const sum = 0;
  const ans = [];

  for (let i = 0; i < n; i++) {
    if (nums[i] + nums[i + 1] + nums[i + 2] > sum) break;
    if (nums[i] + nums[n - 1] + nums[n - 2] < sum) continue;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let lo = i + 1;
    let hi = n - 1;

    while (lo < hi) {
      let sum = nums[i] + nums[lo] + nums[hi];

      if (sum > 0) {
        hi--;
      } else if (sum < 0) {
        lo++;
      } else {
        ans.push([nums[i], nums[lo], nums[hi]]);

        do {
          lo++;
        } while (nums[lo] === nums[lo - 1] && lo < hi);

        do {
          hi--;
        } while (nums[hi] === nums[hi + 1] && lo < hi);
      }
    }
  }

  return ans;
};
