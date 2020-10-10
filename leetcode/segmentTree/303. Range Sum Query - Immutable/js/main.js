class SegTree {
  constructor(nums) {
    let inputArrayLength = nums.length;
    let segmentTreeArrayLength;

    if (this.isPowerOfTwo(inputArrayLength)) {
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

    this.constructSegmentTree(0, nums.length - 1, 0);
  }

  constructSegmentTree(lo, hi, posIndex) {
    if (lo > hi) {
      return;
    }

    if (lo == hi) {
      this.segmentTree[posIndex] = this.nums[lo];
      return;
    }

    let mid = lo + Math.floor((hi - lo) / 2);

    this.constructSegmentTree(lo, mid, 2 * posIndex + 1);
    this.constructSegmentTree(mid + 1, hi, 2 * posIndex + 2);

    this.segmentTree[posIndex] = this.segmentTree[2 * posIndex + 1] + this.segmentTree[2 * posIndex + 2];
  }

  getRangeSum(startRange, endRange) {
    return this.rangeSum(startRange, endRange, 0, this.nums.length - 1, 0);
  }

  rangeSum(startRange, endRange, lo, hi, posIndex) {
    if (startRange > hi || lo > endRange) {
      return 0;
    }

    if (startRange <= lo && hi <= endRange) {
      return this.segmentTree[posIndex];
    }

    let mid = lo + Math.floor((hi - lo) / 2);

    let left = this.rangeSum(startRange, endRange, lo, mid, 2 * posIndex + 1);
    let right = this.rangeSum(startRange, endRange, mid + 1, hi, 2 * posIndex + 2);

    return left + right;
  }

  isPowerOfTwo(num) {
    if (num < 1) return false;

    while (num != 1) {
      if (num % 2 != 0) {
        return false;
      }
      num /= 2;
    }
    return true;
  }
}

class NumArray {
  constructor(nums) {
    if (nums.length) {
      this.segTree = new SegTree(nums);
      console.log(this.segTree.segmentTree);
    }
  }

  sumRange(startRange, endRange) {
    return this.segTree.getRangeSum(startRange, endRange);
  }
}

// nums:    [-2, 0, 3, -5, 2, -1]
// segtree: [ -3, 1, -4, -2, 3, -3, -1, -2, 0, 0, 0, -5, 2, 0, 0 ]
