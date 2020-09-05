/*


*/

class SegTree {
  constructor(nums = []) {
    let inputArrayLength = nums.length;
    let segmentTreeArrayLength;

    if (isPowerOfTwo(inputArrayLength)) {
      // If original array length is a power of two.
      segmentTreeArrayLength = (2 * inputArrayLength) - 1;
    } else {
      let currentPower = Math.floor(Math.log2(inputArrayLength));
      let nextPower = currentPower + 1;
      let nextPowerOfTwoNumber = 2 ** nextPower;
      segmentTreeArrayLength = (2 * nextPowerOfTwoNumber) - 1;
    }

    this.nums = nums;
    this.segmentTree = Array(segmentTreeArrayLength).fill(0);
    this.lazy = Array(segmentTreeArrayLength).fill(0);

    this.constructMinSegmentTree(nums, 0, nums.length - 1, 0);
  }

  constructMinSegmentTree(nums, lo, hi, treeIndex) {
    if (lo == hi) {
      this.segmentTree[treeIndex] = nums[lo];
      return;
    }

    let mid = lo + Math.floor((hi - lo) / 2);

    this.constructMinSegmentTree(nums, lo, mid, 2 * treeIndex + 1);
    this.constructMinSegmentTree(nums, mid + 1, hi, 2 * treeIndex + 2)
    
    this.segmentTree[treeIndex] = Math.min(this.segmentTree[2 * treeIndex + 1], this.segmentTree[2 * treeIndex + 2]);
  }

  getMinRange(startRange, endRange) {
    return this.rangeMinQuery(startRange, endRange, 0, this.nums.length - 1, 0);
  }

  rangeMinQuery(startRange, endRange, low, high, posIndex) {
    if(startRange <= low && endRange >= high){
      return this.segmentTree[posIndex];
    }
    
    if(startRange > high || endRange < low){
      return Number.MAX_VALUE;
    }
    
    let mid = low + Math.floor((high - low) / 2);

    return Math.min(
      this.rangeMinQuery(startRange, endRange, low, mid, 2 * posIndex + 1),
      this.rangeMinQuery(startRange, endRange, mid + 1, high, 2 * posIndex + 2)
      );
  }

  updateSegmentTree(startRange, endRange, delta) {
    return this.updateSegmentTreeRangeLazy(startRange, endRange, delta, 0, this.nums.length - 1, 0);
  }

  updateSegmentTreeRangeLazy(startRange, endRange, delta, low, high, posIndex) {
    if (low > high) {
      return;
    }

    // make sure that propagation is done at current posIndex.
    // if not update the segTree at posIndex and set lazy propagation for childrens. 
    if (this.lazy[posIndex] != 0) {
      this.segmentTree[posIndex] += this.lazy[posIndex];

      // if not leaf node 
      if (low != high) {
        this.lazy[2 * posIndex + 1] += this.lazy[posIndex];
        this.lazy[2 * posIndex + 2] += this.lazy[posIndex];
      }
      // lazy propagation completed
      this.lazy[posIndex] = 0;
    }

    // no overlap condition
    if (startRange > high || endRange < low) {
      return;
    }

    // full overlap condition
    if (startRange <= low && high <= endRange) {
      this.segmentTree[posIndex] += delta;

      // update lazy tree childrens by delta
      if (low != high) {
        this.lazy[2 * posIndex + 1] += delta;
        this.lazy[2 * posIndex + 2] += delta;
      } 
      return;
    } 

    // otherwise partial overlap so look both left and right
    
    let mid = low + Math.floor((high - low) / 2);

    this.updateSegmentTreeRangeLazy(startRange, endRange, delta, low, mid, 2 * posIndex + 1);
    this.updateSegmentTreeRangeLazy(startRange, endRange, delta, mid + 1, high, 2 * posIndex + 2);

    this.segmentTree[posIndex] = Math.min(this.segmentTree[2 * posIndex + 1], this.segmentTree[2 * posIndex + 2]);
  }

  getLazyMinRange(startRange, endRange) {
    return this.rangeMinQueryLazy(startRange, endRange, 0, this.nums.length - 1, 0);
  }

  rangeMinQueryLazy(startRange, endRange, low, high, posIndex) {

    if (low > high) {
      return Number.MAX_VALUE;
    }

    if (this.lazy[posIndex] != 0) {
      this.segmentTree[posIndex] += this.lazy[posIndex];

      if (low != high) {
        this.lazy[2 * posIndex + 1] += this.lazy[posIndex];
        this.lazy[2 * posIndex + 2] += this.lazy[posIndex];
      }

      this.lazy[posIndex] = 0;
    }

    // no overlap
    if (startRange > high || endRange < low) {
      return Number.MAX_VALUE;
    }

    // full overlap
    if (startRange <= low && high <= endRange) {
      return this.segmentTree[posIndex];
    }

    // partial overlap so look both left and right
    let mid = low + Math.floor((high - low) / 2);

    return Math.min(
      this.rangeMinQueryLazy(startRange, endRange, low, mid, 2 * posIndex + 1),
      this.rangeMinQueryLazy(startRange, endRange, mid + 1, high, 2 * posIndex + 2),
    );
  }
}

function isPowerOfTwo(num) {
  if (num < 1) {
    return false;
  }

  let dividedNumber = num;

  while (dividedNumber % 2 != 1) {
    if (dividedNumber % 2 != 0) {
      return false;
    }

    dividedNumber /= 2;
  }
  
  return true;
}

// nums: [2, 3, -1, 4] 
// segmentTree: [-1, 2, -1, 2, 3, -1, 4] 

let segTree = new SegTree([2, 3, -1, 4]);

let x1 = segTree.getMinRange(0, 2);
console.log(x1);

let x2 = segTree.updateSegmentTree(0, 3, 2);
console.log(x2);

let x3 = segTree.getLazyMinRange(1, 2);
console.log(x2);
