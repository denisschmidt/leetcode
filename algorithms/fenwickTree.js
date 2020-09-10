class FenwickTree {
  constructor(nums) {
    let n = nums.length;
    this.binaryIndexedTree = Array(n);

    for (let i = 1; i <= n; i++) {
      this.updateBinaryIndexedTree(nums[i - 1], i);
    }
  }

  updateBinaryIndexedTree(val, index) {
    while (index < this.binaryIndexedTree.length) {
      this.binaryIndexedTree[index] += val;
      index = this.getNext(index);
    }
  }

  getSum(index) {
    index = index + 1;
    let sum = 0;

    while (index > 0) {
      sum += this.binaryIndexedTree[index];
      index = getParent(index);
    }

    return sum;
  }

  getParent(index) {
    return index - (index & -index);
  }

  getNext(index) {
    return index + (index & -index);
  }
}
