/*
Given an array of integers with possible duplicates, randomly output the index of a given target number. 
You can assume that the given target number must exist in the array.

Note:
The array size can be very large. Solution that uses too much extra space will not pass the judge.

Example:
  int[] nums = new int[] {1,2,3,3,3};
  Solution solution = new Solution(nums);

  // pick(3) should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.
  solution.pick(3);

  // pick(1) should return 0. Since in the array only nums[0] is equal to 1.
  solution.pick(1);

 */

const randomInt = (min, max) => min + Math.floor(Math.random() * max - min);

class Solution {
  constructor(nums) {
    this.nums = nums;
  }

  pick(target) {
    let count = 0;
    let res = null;

    for (let i = 0; i < this.nums.length; i++) {
      if (this.nums[i] === target) {
        count++;
        let rand = randomInt(0, count);

        if (rand === count - 1) {
          res = i;
        }
      }
    }

    return res;
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Наивное решение в котором в память записывается очень большой массив
// Time O(K) где K кол-вл встречающихся элементов
// Space O(N)
class Solution2 {
  constructor(nums) {
    this.map = new Map();

    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if (!this.map.has(num)) {
        this.map.set(num, [i]);
      } else {
        this.map.set(num, [...this.map.get(num), i]);
      }
    }
  }

  pick(target) {
    const arr = this.map.get(target);

    if (arr.length === 1) {
      return arr[0];
    }

    // shuffle
    for (let i = arr.length - 1; i >= 0; i--) {
      const index = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }

    return arr[0];
  }
}
