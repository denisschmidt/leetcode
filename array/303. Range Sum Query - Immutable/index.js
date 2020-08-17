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
  constructor(nums) {
    this.nums = nums;
  }

  sumRange(i, j) {
    let sum = this.nums[i];
    for (let k = i + 1; k <= j; k++) {
      sum += this.nums[k];
    }
    return sum;
  }
}
