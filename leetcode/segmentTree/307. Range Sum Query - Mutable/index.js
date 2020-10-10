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

class SegTree {
  constructor(nums) {
    let inputArrayLength = nums.length;
    let segmentTreeArrayLength;

    if (isPowerOfTwo(inputArrayLength)) {
      // If original array length is a power of two.
      segmentTreeArrayLength = 2 * inputArrayLength - 1;
    } else {
      let currentPower = Math.floor(Math.log2(inputArrayLength));
      let nextPower = currentPower + 1;
      let nextPowerOfTwoNumber = 2 ** nextPower;
      segmentTreeArrayLength = 2 * nextPowerOfTwoNumber - 1;
    }

    this.nums = nums;
    this.segmentTree = Array(segmentTreeArrayLength).fill(0);
    this.build(nums, 0, nums.length - 1, 0);
  }

  build(nums, lo, hi, index) {
    if (lo == hi) {
      this.segmentTree[index] = nums[lo];
      return;
    }

    let mid = lo + Math.floor((hi - lo) / 2);

    this.build(nums, lo, mid, index * 2 + 1);
    this.build(nums, mid + 1, hi, index * 2 + 2);

    this.segmentTree[index] = this.segmentTree[index * 2 + 1] + this.segmentTree[index * 2 + 2];
  }

  updateRange(i, val) {
    this.update(i, val, 0, this.nums.length - 1, 0);
  }

  update(updateIndex, val, lo, hi, index) {
    if (lo > hi) {
      return;
    }

    if (lo == hi) {
      this.segmentTree[index] = val;
      return;
    }

    let mid = lo + Math.floor((hi - lo) / 2);

    if (updateIndex > mid) {
      this.update(updateIndex, val, mid + 1, hi, 2 * index + 2);
    } else {
      this.update(updateIndex, val, lo, mid, 2 * index + 1);
    }

    // merge updates
    this.segmentTree[index] = this.segmentTree[index * 2 + 1] + this.segmentTree[index * 2 + 2];
  }

  getRange(i, j) {
    return this.get(i, j, 0, this.nums.length - 1, 0);
  }

  get(startRange, endRange, lo, hi, index) {
    if (lo > hi) {
      return 0;
    }

    if (startRange > hi || lo > endRange) {
      return 0;
    }

    if (startRange <= lo && hi <= endRange) {
      return this.segmentTree[index];
    }

    let mid = lo + Math.floor((hi - lo) / 2);

    let leftQuery = this.get(startRange, endRange, lo, mid, index * 2 + 1);
    let rightQuery = this.get(startRange, endRange, mid + 1, hi, index * 2 + 2);

    return leftQuery + rightQuery;
  }
}

function isPowerOfTwo(num) {
  if (num < 1) return false;

  while (num != 1) {
    if (num % 2 != 0) return false;
    num /= 2;
  }
  return true;
}

class NumArray {
  constructor(nums) {
    if (nums.length) {
      this.segTree = new SegTree(nums);
    }
  }

  update(i, val) {
    this.segTree.updateRange(i, val);
  }

  sumRange(i, j) {
    return this.segTree.getRange(i, j);
  }
}
