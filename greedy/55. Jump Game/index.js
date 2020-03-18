/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:
  Input: [2,3,1,1,4]
  Output: true
  Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
  Input: [3,2,1,0,4]
  Output: false
  Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.

  Solution https://leetcode.com/articles/jump-game/

*/

// Greedy
// Просто итерируемся и обновляем максимальный индекс который можем достичь
// Выбор локального оптимального значения, чтобы потом достигнуть глобальное оптимальное значение

// Time O(N)
// Space O(1)
const canJump = nums => {
  let max = 0;
  for (let i = 0; i <= max; i++) {
    max = Math.max(max, i + nums[i]);
    if (max >= nums.length - 1) return true;
  }
  return false;
};

// DFS - добавляем в стек все возможные пути
// Допустим шаг [2,3,1,1,4] шаг 2 -> возможные переходы 3 или 1 добавляем их в стек

// Time O(N^2)
// Space O(N)
const canJump_II = nums => {
  let stack = [0];
  let n = nums.length;
  let visited = Array(nums.length);

  while (stack.length) {
    let i = stack.pop();

    if (visited[i]) continue;

    visited[i] = true;

    if (i == n - 1) return true;

    for (let nextPosition = i + 1; nextPosition <= i + nums[i]; nextPosition++) {
      if (visited[nextPosition]) continue;
      stack.push(nextPosition);
    }
  }

  return false;
};

// Time O(N)
// Space O(1)
const canJump_III = nums => {
  let lastPos = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= lastPos) {
      lastPos = i;
    }
  }

  return lastPos === 0;
};
