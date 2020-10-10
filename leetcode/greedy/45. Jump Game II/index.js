/*

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:
  Input: [2,3,1,1,4]
  Output: 2
  Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.

Note:
  You can assume that you can always reach the last index.

*/

// Time O(N)
// Space O(1)
const jump = nums => {
  let i = 0;
  let maxReach = 0;
  let localMaxReach = 0;
  let cnt = 0;

  while (i < nums.length && localMaxReach < nums.length - 1) {
    // ищем новый максимум в пределах до текущего максимума
    while (i < nums.length && i <= maxReach) {
      localMaxReach = Math.max(localMaxReach, i + nums[i++]);
    }

    if (localMaxReach <= maxReach) return -1;

    cnt++;
    maxReach = localMaxReach;
  }

  return cnt;
};

// Time O(N)
// Space O(N)
const jump_II = nums => {
  let queue = [0];
  let cnt = 0;
  let end = 0;
  let start = 0;

  while (queue.length) {
    let size = queue.length;

    for (let k = 0; k < size; k++) {
      let i = queue.shift();

      if (i === nums.length - 1) return cnt;

      // Получаем максимальный рендж [start, end]
      // Добавляем все итемы которые в этом рендже опять в очередь
      // Делаем это пока не дойдем до конца массива
      start = Math.max(start, i);
      end = Math.max(end, i + nums[i]);
    }

    for (let j = start; j <= end; j++) {
      queue.push(j);
    }
    cnt++;
  }

  return -1;
};
