/*

Given an array of integers with possible duplicates, randomly output the index of a given target number. 
You can assume that the given target number must exist in the array.

Note:
The array size can be very large. Solution that uses too much extra space will not pass the judge.

Example:
  int[] nums = new int[] {1,2,3,3,3};
  Solution solution = new Solution(nums);

  pick(3) should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.
  solution.pick(3);

  pick(1) should return 0. Since in the array only nums[0] is equal to 1.
  solution.pick(1);

*/

// Time O(N)
// Space O(N)
class Solution {
  constructor(nums) {
    this.nums = nums;
  }

  pick(target) {
    let visitedIndexes = 0;
    let res = null;

    for (let i = 0; i < this.nums.length; i++) {
      if (this.nums[i] === target) {
        visitedIndexes++;

        // Generate random index in interval [0, visitedIndexes)
        // It gives confidence that we get currect answer (res != null)
        let rand = this.randomInt(0, visitedIndexes);

        if (rand == visitedIndexes - 1) {
          res = i;
        }
      }
    }

    return res;
  }

  randomInt(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  }
}

// Наивное решение в котором в память записывается очень большой массив
// Time O(K) где K кол-вл встречающихся элементов
// Space O(N)
class Solution_II {
  constructor(nums) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (!map.has(nums[i])) {
        map.set(nums[i], []);
      }
      map.get(nums[i]).push(i);
    }

    this.map = map;
  }

  pick(target) {
    let nums = this.map.get(target);
    let n = nums.length;

    if (n == 1) return nums[0];

    // shuffle
    for (let max = n - 1; max >= 0; max--) {
      const randIndex = this.randomInt(0, max);

      this.swap(nums, i, randIndex);
    }

    return nums[0];
  }

  randomInt(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  }

  swap(nums, i, j) {
    return ([nums[i], nums[j]] = [nums[j], nums[i]]);
  }
}
