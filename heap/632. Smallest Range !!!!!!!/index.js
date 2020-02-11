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

// Time O(N* MIN(K))
// K относится к общему количеству списков.
// Здесь N относится к общему количеству элементов во всех списках

// Space O(N)
const smallestRange = nums => {
  // Указывает с какого индекса мы начинаем поиск в каждом подмассиве
  let pointers = Array(nums.length).fill(0);
  let isDone = false;
  let result = [];
  let minRange = Number.MAX_VALUE;

  while (true) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let minIndex = -1;

    for (let i = 0; i < nums.length; i++) {
      if (pointers[i] === nums[i].length) {
        isDone = true;
        break;
      }

      let value = nums[i][pointers[i]];

      if (min > value) {
        min = value;
        minIndex = i;
      }

      if (max < value) {
        max = value;
      }
    }

    if (minIndex > -1) {
      pointers[minIndex]++;
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
