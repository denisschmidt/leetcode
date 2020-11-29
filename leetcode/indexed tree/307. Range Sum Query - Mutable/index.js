/*

Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

The update(i, val) function modifies nums by updating the element at index i to val.

Example:
  Given nums = [1, 3, 5]
  sumRange(0, 2) -> 9
  update(1, 2)
  sumRange(0, 2) -> 8
 
Constraints:
  The array is only modifiable by the update function.
  You may assume the number of calls to update and sumRange function is distributed evenly.
  0 <= i <= j <= nums.length - 1

*/

class NumArray {
  constructor(nums) {
    let n = nums.length;

    this.tree = Array(n + 1).fill(0);
    this.nums = nums;

    for (let i = 0; i < n; i++) {
      this.build(i, nums[i]);
    }
  }

  build(i, val) {
    i++;
    while (i < this.tree.length) {
      this.tree[i] += val;
      i = this.getNext(i);
    }
  }

  getNext(i) {
    return i + (i & -i);
  }

  getPrev(i) {
    return i - (i & -i);
  }

  getSum(i) {
    let sum = 0;
    i++;

    while (i > 0) {
      sum += this.tree[i];
      i = this.getPrev(i);
    }

    return sum;
  }

  sumRange(i, j) {
    return this.getSum(j) - this.getSum(i - 1);
  }

  update(i, val) {
    let d = val - this.nums[i];
    this.nums[i] = val;
    this.build(i, d);
  }
}
