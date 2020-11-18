// https://www.youtube.com/watch?v=CWDQJGaN1gY&ab_channel=TusharRoy-CodingMadeSimple

class FenwickTree {
  constructor(nums) {
    let n = nums.length;
    this.tree = Array(n);

    for (let i = 1; i <= n; i++) {
      this.update(i, nums[i - 1]);
    }
  }

  // Only full update. Can't update by range
  update(index, val) {
    while (index < this.tree.length) {
      this.tree[index] += val;
      index = this.getChild(index);
    }
  }

  /*
    add tree[idx] to sum (initially, we set sum to be zero); 
    
    subtract the last bit of idx from itself (i.e., set the least significat non-zero bit of idx to zero); 
    
    repeat this process while idx is greater than zero
  */
  read(index) {
    index = index + 1;
    let sum = 0;

    while (index > 0) {
      sum += this.tree[index];
      index = getParent(index);
    }

    return sum;
  }

  getParent(index) {
    return index - (index & -index);
  }

  getChild(index) {
    return index + (index & -index);
  }
}
