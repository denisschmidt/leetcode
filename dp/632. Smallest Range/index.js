/*
You have k lists of sorted integers in ascending order.

Find the smallest range that includes at least one number from each of the k lists.

We define the range [a,b] is smaller than range [c,d] if b-a < d-c or a < c if b-a == d-c.

Example 1:
  Input:[[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]

  Output: [20,24]

  Explanation:
    List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
    List 2: [0, 9, 12, 20], 20 is in range [20,24].
    List 3: [5, 18, 22, 30], 22 is in range [20,24].

  Note:
  The given list may contain duplicates, so ascending order means >= here.
  1 <= k <= 3500
  -105 <= value of elements <= 105.

 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const compare = (a, b) => a - b;

/**
 * Этот алгоритм находит наибольший минимальный диапазон значений.
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
const smallestRange = function(matrix) {
  let first = [],
    last = [],
    mins = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i],
      max = -10e5,
      min = Number.MAX_VALUE;
    for (let j = 0; j < row.length; j++) {
      max = Math.max(max, row[j]);
      min = Math.min(min, row[j]);
    }
    first.push(max);
    mins.push(min);
  }
  const isEquals = mins.every(val => val === mins[0]);
  if (mins.length === matrix.length && isEquals) {
    return [mins[0], mins[0]];
  }
  let min = first.sort(compare)[0];
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] >= min) {
        last.push(row[j]);
        break;
      }
    }
  }
  let max = last.sort(compare)[last.length - 1];
  return [min, max];
};

const res = smallestRange([[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]);
console.log('<error solution>', res);

// ======================================================================================================
const smallestRange1 = nums => {
  let minRangeMin = 0,
    minRangeMax = 0,
    minRange = Number.MAX_VALUE,
    isDone = false;
  const pointers = new Array(nums.length).fill(0);

  while (true) {
    // for every iteration of all the lists, we keep track of these values
    let minListIndex = -1;
    let minValue = Number.MAX_VALUE,
      maxValue = Number.MIN_VALUE;

    for (let listIndex = 0; listIndex < nums.length; listIndex++) {
      const list = nums[listIndex];

      if (pointers[listIndex] === list.length) {
        isDone = true;
        break;
      }

      const value = list[pointers[listIndex]];
      if (value < minValue) {
        minValue = value;
        minListIndex = listIndex;
      }

      if (value > maxValue) {
        maxValue = value;
      }
    }

    if (isDone) {
      break;
    }

    pointers[minListIndex]++;

    if (maxValue - minValue < minRange) {
      minRangeMin = minValue;
      minRangeMax = maxValue;
      minRange = maxValue - minValue;
    }
  }
  return [minRangeMin, minRangeMax];
};

const res1 = smallestRange1([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]);
console.log('<first solution>', res1);

// ======================================================================================================

/**
 *
 * @param {number[][]} nums
 * @return {number[]}
 */

/*
  Time Complexity:
    O(n* k) since we have to loop through n elements of k lists.

  Space Complexity:
    O(k) since it requires maintaining k pointers/indicies.
 */
const smallestRange2 = nums => {
  let minX = 0,
    minY = Number.MAX_VALUE;
  let next = new Array(nums.length).fill(0);
  let flag = true;
  for (let i = 0; i < nums.length && flag; i++) {
    for (let j = 0; j < nums[i].length && flag; j++) {
      let minI = 0,
        maxI = 0;
      for (let k = 0; k < nums.length; k++) {
        if (nums[minI][next[minI]] > nums[k][next[k]]) minI = k;
        if (nums[maxI][next[maxI]] < nums[k][next[k]]) maxI = k;
      }
      if (minY - minX > nums[maxI][next[maxI]] - nums[minI][next[minI]]) {
        minY = nums[maxI][next[maxI]];
        minX = nums[minI][next[minI]];
      }
      next[minI] = next[minI] + 1;
      if (next[minI] === nums[minI].length) {
        flag = false;
      }
    }
  }
  return [minX, minY];
};

const res2 = smallestRange2([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]);
console.log('<second solution>', res2);
