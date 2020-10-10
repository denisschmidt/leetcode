/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3

Note:
  You may assume that the array does not change.
  There are many calls to sumRange function.
 */

class NumArray {
  // Time O(N)
  constructor(nums) {
    let prefix = [];
    prefix[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
      prefix[i] = prefix[i - 1] + nums[i];
    }

    this.prefix = prefix;
  }

  // Time O(1)
  sumRange(i, j) {
    if (i == 0) return this.prefix[j];
    return this.prefix[j] - this.prefix[i - 1];
  }
}
