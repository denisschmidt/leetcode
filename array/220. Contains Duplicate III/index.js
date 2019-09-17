/*
Given an array of integers, find out whether there are two distinct indices i and j
in the array such that the absolute difference between nums[i] and nums[j]
s at most t and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3, t = 0
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1, t = 2
Output: true
Example 3:

Input: nums = [1,5,9,1,5,9], k = 2, t = 3
Output: false

 */

// Time O(N^2)
// Space O(N)
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  const n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(j - i) > k) break;
      let valDiff = Math.abs(nums[i] - nums[j]);
      if (valDiff <= t) {
        return true;
      }
    }
  }

  return false;
};
