/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
  let counts = Array(nums.length).fill(0);
  let isDone = false;
  let result = [];
  let minRange = Number.MAX_VALUE;

  while (true) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let minIndex = -1;

    for (let i = 0; i < nums.length; i++) {
      let cur = nums[i];

      if (pointers[i] === nums.length) {
        isDone = true;
        break;
      }

      let value = nums[i][counts[i]];

      if (min > value) {
        min = value;
        minIndex = i;
      }

      if (max < value) {
        max = value;
      }
    }

    if (minIndex > -1) {
      counts[minIndex]++;
    }

    if (isDone) {
      break;
    }

    if (max - min < minRange) {
      minRange = max - min;
      result = [min, max];
    }
  }

  return result;
};
