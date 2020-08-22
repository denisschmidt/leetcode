/*

Shuffle a set of numbers without duplicates.

Example:
  Init an array with set 1, 2, and 3.
  int[] nums = {1,2,3};
  Solution solution = new Solution(nums);

  Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
  solution.shuffle();

  Resets the array back to its original configuration [1,2,3].
  solution.reset();

  Returns the random shuffling of array [1,2,3].
  solution.shuffle();

*/

// Time O(N)
// Space O(N)
class Solution {
  constructor(nums) {
    this.nums = nums;
  }

  reset() {
    return this.nums;
  }

  shuffle() {
    const n = this.nums.length - 1;
    const nums = this.nums.slice(0);

    for (let max = n; max >= 0; max--) {
      const randIndex = this.randomInteger(0, max);
      this.swap(nums, randIndex, max);
    }

    return nums;
  }

  swap(nums, i, j) {
    return ([nums[i], nums[j]] = [nums[j], nums[i]]);
  }

  randomInteger(min, max) {
    let rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
  }
}
