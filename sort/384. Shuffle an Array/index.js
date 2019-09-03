/**
 * @param {number[]} nums
 */
const Solution = function(nums) {
  this.nums = nums;
  this.randomNums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
// Time O(N)
Solution.prototype.shuffle = function() {
  const n = this.nums.length;
  for (let i = n - 1; i >= 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    let tmp = this.nums[i];
    this.nums[i] = this.nums[random];
    this.nums[random] = tmp;
  }
  return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
